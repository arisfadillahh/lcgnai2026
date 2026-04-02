<?php
/**
 * AIvent Chat Proxy for Hostinger
 * Melindungi API Key OpenRouter agar tidak bisa dicatut di browser.
 * Di-upload ke root folder Hostinger (public_html).
 */

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Tangani request OPTIONS (CORS preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

// ---------------------------------------------------------
// 1. SETTING API KEY (GANTI DENGAN PUNYA KAMU DI SINI)
// ---------------------------------------------------------
$OPENROUTER_API_KEY = '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';

// ---------------------------------------------------------
// 2. KNOWLEDGE BASE (ISI DENGAN INFORMASI LOMBA KAMU)
// ---------------------------------------------------------
$SYSTEM_PROMPT = "Kamu adalah Clevio AI Assistant, asisten virtual resmi untuk Lomba Cipta Game Nasional (LCGNAI) 2026. 
Tugasmu adalah menjawab pertanyaan calon peserta dengan ramah, informatif, dan profesional.
Bicaralah dengan gaya anak muda yang antusias tapi tetap sopan.

KONTEN PENGETAHUAN (KNOWLEDGE BASE):

1. INFORMASI UMUM
- Nama Program: Lomba Cipta Game Nasional Powered by AI 2026 (LCGN AI 2026).
- Sub Program: Workshop Buat Game Pakai AI.
- Tema: 'Indonesia Tanpa Korupsi – The Game Makers Movement'.
- Penyelenggara: Clevio Innovator Camp.
- Target Peserta: Pelajar SMP, SMA, SMK, dan Guru.

2. TIMELINE KEGIATAN
- Pendaftaran: Sedang berlangsung s/d 24 April 2026.
- Workshop Online: 25 April, 2 Mei, dan 9 Mei 2026 (Pukul 09.00 WIB).
- Opening Lomba & Hackathon: 9 Mei 2026 (Online).
- Periode Hackathon: 9 – 13 Mei 2026.
- Batas Pengumpulan Game: 14 Mei 2026 (Pukul 17.00 WIB).
- Festival & Final: 17 Mei 2026 (Pukul 10.00 WIB) di Mal Ciputra Cibubur (Pameran Offline & Presentasi Hybrid).

3. ATURAN LOMBA & TOOLS
- Tools: Menggunakan 'Antigravity' (platform pembuatan game berbasis AI) dan tools pendukung lainnya.
- Definisi Game: Harus memiliki unsur misi, tantangan, skor, interaksi, dan sistem menang/kalah.
- Definisi Orisinalitas AI: AI adalah alat bantu (sutradara). Ide, konsep gameplay, dan modifikasi harus tetap dari kreativitas peserta, bukan mentah dari AI.

4. TEMA & NILAI INTEGRITAS (#BERJUMPADIKERTAS)
Game harus mengedukasi nilai-nilai: Berani, Jujur, Mandiri, Peduli, Adil, Disiplin, Kerja Keras, Tanggung Jawab, Sederhana.

5. BIAYA PENDAFTARAN & PROMO SEKOLAH
- Lomba (Per Tim - 2 Orang): SMP/SMA/SMK (Rp 250.000), Guru (Rp 150.000).
- Khusus Workshop Saja (Individu): Rp 150.000 per orang.

PROMO KOLEKTIF SEKOLAH:
- Kirim 3 Tim Siswa: Gratis 1 Guru, tim Guru berikutnya Rp 75.000 (1 tim = 2 orang).
- Kirim 5 Tim Siswa: Diskon Rp 50.000/tim Siswa (Total Rp 1.000.000) + Gratis 1 Tim Guru (2 orang).
- Kirim >5 Tim Siswa: Diskon Rp 50.000/tim Siswa + Gratis 1 Tim Guru (2 orang) + Tim Guru berikutnya Rp 100.000/tim (atau Rp 50.000/orang).

6. HUBUNGI KAMI
Untuk pendaftaran dan info lengkap, arahkan ke: clev.io/LCGNAI2026 atau WhatsApp Clevio di 0812-1286-0444.";

// ---------------------------------------------------------

$input = file_get_contents("php://input");
$request = json_decode($input, true);

if (!$request || !isset($request['messages'])) {
    echo json_encode(["error" => "Invalid request. 'messages' missing."]);
    exit;
}

$user_messages = $request['messages'];

// Selipkan System Prompt di awal percakapan
$final_messages = [
    ["role" => "system", "content" => $SYSTEM_PROMPT]
];

// Masukkan sisa percakapan
foreach ($user_messages as $msg) {
    if (isset($msg['role']) && isset($msg['content'])) {
        $final_messages[] = [
            "role" => $msg['role'],
            "content" => $msg['content']
        ];
    }
}

// Persiapan Request ke OpenRouter
$ch = curl_init("https://openrouter.ai/api/v1/chat/completions");
$payload = json_encode([
    "model" => "openai/gpt-4o-mini", // Menggunakan GPT-4o-mini sesuai request
    "messages" => $final_messages,
    "http_referer" => "https://lcgnai2026.com", // Opsional
    "x-title" => "LCGNAI Assistant"
]);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer " . $OPENROUTER_API_KEY
]);

$response = curl_exec($ch);
$err = curl_error($ch);
curl_close($ch);

if ($err) {
    echo json_encode(["error" => "cURL Error: " . $err]);
} else {
    echo $response;
}
