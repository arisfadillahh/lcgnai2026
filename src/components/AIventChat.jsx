import React, { useState, useEffect, useRef } from 'react';
import './AIventChat.css';
import { FaRobot, FaPaperPlane, FaTimes, FaCommentDots } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const AIventChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Halo! Saya Clevio AI Assistant. Ada yang bisa saya bantu terkait LCGNAI 2026?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            // Memanggil PHP Proxy yang akan di-upload ke Hostinger
            // Menggunakan relative path './' agar aman meskipun di sub-folder
            const response = await fetch('./chat-proxy.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    messages: [...messages, userMessage].map(m => ({ 
                        role: m.role, 
                        content: m.content 
                    }))
                })
            });

            if (!response.ok) {
                throw new Error(`Server Error (${response.status}): ${response.statusText}`);
            }

            const data = await response.json();
            
            if (data.error) {
                const errorMessage = typeof data.error === 'object' ? data.error.message : data.error;
                setMessages(prev => [...prev, { role: 'assistant', content: 'Maaf, terjadi kesalahan pada server: ' + errorMessage }]);
            } else {
                const fullContent = data.choices[0].message.content;
                // Simulasi efek streaming/ngetik
                setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
                
                let currentText = '';
                const words = fullContent.split(' ');
                for (let i = 0; i < words.length; i++) {
                    currentText += (i === 0 ? '' : ' ') + words[i];
                    await new Promise(resolve => setTimeout(resolve, 20 + Math.random() * 30)); // Delay antar kata
                    setMessages(prev => {
                        const newMessages = [...prev];
                        newMessages[newMessages.length - 1].content = currentText;
                        return newMessages;
                    });
                }
            }
        } catch (error) {
            console.error('Chat Error:', error);
            // Memberikan pesan offline yang lebih ramah sesuai request
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: `Maaf ya, Clevio AI sedang beristirahat sejenak 😴. Coba sapa saya lagi sebentar lagi ya! 🙏` 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`aivent-chat-wrapper ${isOpen ? 'active' : ''}`}>
            {/* Floating Bubble Button - Hidden when window is open */}
            {!isOpen && (
                <button 
                    className="aivent-chat-bubble" 
                    onClick={() => setIsOpen(true)}
                >
                    <FaCommentDots />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="aivent-chat-window aivent-glass-panel">
                    <div className="aivent-chat-header">
                        <div className="d-flex align-items-center">
                            <div className="aivent-bot-avatar">
                                <FaRobot />
                            </div>
                            <div className="aivent-bot-info ms-2">
                                <h6 className="mb-0">Clevio AI Assistant</h6>
                                <span className="aivent-status">
                                    <span className="aivent-online-dot"></span> Online
                                </span>
                            </div>
                        </div>
                        <button className="aivent-close-btn" onClick={() => setIsOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className="aivent-chat-messages aivent-scrollbar-v" onWheel={e => e.stopPropagation()}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`aivent-message-bubble ${msg.role}`}>
                                <div className="aivent-chat-content">
                                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="aivent-message-bubble assistant">
                                <div className="aivent-chat-content typing">
                                    <div className="aivent-typing-indicator">
                                        <span></span><span></span><span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="aivent-chat-input" onSubmit={handleSend}>
                        <input 
                            type="text" 
                            placeholder="Tanya sesuatu..." 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit" disabled={isLoading}>
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AIventChat;
