"use client";

import { Lock, Send, Shield, X } from "lucide-react";
import { useState } from "react";

const quickReplies = [
  "Які зараз є вакансії?",
  "Які види контракту?",
  "Хочу зв'язатися з рекрутером",
];

const channels = [
  { label: "Telegram", href: "https://t.me/DPSUkr" },
  { label: "Viber", href: "tel:TELLL" },
  { label: "WhatsApp", href: "tel:Tell" },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [queuedMessage, setQueuedMessage] = useState("");

  const submitMessage = () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    setQueuedMessage(trimmedMessage);
    setMessage("");
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 2147483647,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {isOpen && (
        <div
          style={{
            width: "min(360px, calc(100vw - 32px))",
            overflow: "hidden",
            marginBottom: 16,
            border: "1px solid rgba(185, 176, 141, 0.45)",
            borderRadius: 24,
            background: "linear-gradient(180deg, rgba(11,55,31,0.98), rgba(8,36,22,0.98))",
            color: "#fff",
            boxShadow: "0 24px 70px rgba(0,0,0,0.48)",
            boxSizing: "border-box",
          }}
        >
          <div style={{ padding: "16px 16px 0" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  flex: "0 0 40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 12,
                  background: "#b9b08d",
                  color: "#06140d",
                }}
              >
                <Shield size={21} />
              </div>

              <div style={{ minWidth: 0, flex: 1 }}>
                <h2
                  style={{
                    margin: 0,
                    color: "#fff",
                    fontSize: 18,
                    lineHeight: "22px",
                    fontWeight: 900,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Рекрутинговий центр
                </h2>
                <p
                  style={{
                    margin: "4px 0 0",
                    color: "rgba(255,255,255,0.72)",
                    fontSize: 14,
                    lineHeight: "18px",
                    fontWeight: 700,
                  }}
                >
                  Очікування рекрутера...
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: 14,
                paddingTop: 12,
                borderTop: "1px dashed rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                  href={channel.href}
                  onClick={(event) => event.preventDefault()}
                    aria-label={channel.label}
                    style={{
                      width: 34,
                      height: 34,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      boxSizing: "border-box",
                    }}
                  >
                    <Send size={16} />
                  </a>
                ))}
              </div>

              <button
                onClick={() => setIsOpen(false)}
                style={{
                  height: 34,
                  padding: "0 12px",
                  border: "1px solid rgba(185,176,141,0.72)",
                  borderRadius: 10,
                  background: "#b9b08d",
                  color: "#06140d",
                  fontSize: 12,
                  fontWeight: 900,
                  cursor: "pointer",
                }}
              >
                Завершити
              </button>
            </div>
          </div>

          <div
            style={{
              marginTop: 14,
              padding: 16,
              borderTop: "1px solid rgba(255,255,255,0.14)",
              borderBottom: "1px solid rgba(255,255,255,0.14)",
              background: "#163f27",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "fit-content",
                maxWidth: 246,
                padding: "10px 13px",
                borderRadius: "17px 17px 17px 6px",
                background: "#eef1e8",
                color: "#172217",
                fontSize: 13,
                lineHeight: "19px",
                fontWeight: 600,
                overflowWrap: "break-word",
                whiteSpace: "normal",
                boxSizing: "border-box",
                boxShadow: "0 3px 10px rgba(0,0,0,0.16)",
              }}
            >
              Вітаємо у чаті рекрутингового центру.
              <br />
              Напишіть ваше питання і наш рекрутер невдовзі вам відповість.
              <span style={{ marginLeft: 6, color: "#6f756b", fontSize: 11, fontWeight: 700 }}>14:33</span>
            </div>

            <div style={{ marginTop: 12, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => setMessage(reply)}
                  style={{
                    maxWidth: 238,
                    padding: "8px 12px",
                    border: 0,
                    borderRadius: "17px 17px 6px 17px",
                    background: "#b9b08d",
                    color: "#102819",
                    fontSize: 12,
                    lineHeight: "17px",
                    fontWeight: 800,
                    textAlign: "right",
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                    boxSizing: "border-box",
                    cursor: "pointer",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.16)",
                  }}
                >
                  {reply}
                </button>
              ))}
            </div>

            {queuedMessage && (
              <div
                style={{
                  marginTop: 14,
                  marginLeft: "auto",
                  maxWidth: 238,
                  padding: "10px 12px",
                  borderRadius: "17px 17px 6px 17px",
                  background: "#b9b08d",
                  color: "#102819",
                  fontSize: 12,
                  lineHeight: "17px",
                  fontWeight: 800,
                  overflowWrap: "break-word",
                  whiteSpace: "normal",
                  boxSizing: "border-box",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.16)",
                }}
              >
                {queuedMessage}
                <div style={{ marginTop: 4, textAlign: "right", color: "rgba(16,40,25,0.62)", fontSize: 11 }}>
                  демо
                </div>
              </div>
            )}

            <div
              style={{
                marginTop: 14,
                marginLeft: "auto",
                maxWidth: 238,
                padding: "10px 12px",
                borderRadius: "17px 17px 6px 17px",
                background: "#1f8a4c",
                color: "#fff",
                fontSize: 12,
                lineHeight: "17px",
                fontWeight: 800,
                overflowWrap: "break-word",
                whiteSpace: "normal",
                boxSizing: "border-box",
                boxShadow: "0 3px 10px rgba(0,0,0,0.16)",
              }}
            >
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <Lock size={14} />
                <span>Live-chat сервіс поки в режимі заглушки.</span>
              </div>
              <div style={{ marginTop: 4, textAlign: "right", color: "rgba(255,255,255,0.75)", fontSize: 11 }}>
                offline
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "center", padding: 12, background: "#0b2416" }}>
            <input
              type="text"
              placeholder="Ваше повідомлення..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  submitMessage();
                }
              }}
              style={{
                minWidth: 0,
                flex: 1,
                height: 40,
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 999,
                background: "#eef1e8",
                color: "#172217",
                padding: "0 14px",
                fontSize: 14,
                fontWeight: 600,
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <button
              onClick={submitMessage}
              aria-label="Подзвонити рекрутеру"
              style={{
                border: 0,
                width: 40,
                height: 40,
                flex: "0 0 40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                background: "#b9b08d",
                color: "#06140d",
                cursor: "pointer",
              }}
            >
              <Send size={19} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((current) => !current)}
        style={{
          display: "flex",
          width: 58,
          height: 58,
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          borderRadius: 999,
          background: "#b9b08d",
          color: "#06140d",
          boxShadow: "0 18px 46px rgba(0,0,0,0.38)",
          cursor: "pointer",
        }}
        aria-label={isOpen ? "Закрити чат" : "Відкрити чат рекрутера"}
      >
        {isOpen ? <X size={30} /> : <Send size={27} />}
      </button>
    </div>
  );
}
