"use client";

import { useState, useEffect } from "react";

type DocumentItem = {
  id: number;
  name: string;
  checked: boolean;
  file: File | null;
  preview: string;
};

type SavedProfileData = {
  docs?: DocumentItem[];
  notes?: string;
};

const initialDocuments: DocumentItem[] = [
  { id: 1, name: "Паспорт громадянина України", checked: false, file: null as File | null, preview: "" },
  { id: 2, name: "Ідентифікаційний код (РНОКПП)", checked: false, file: null as File | null, preview: "" },
  { id: 3, name: "Документи про освіту (диплом/атестат)", checked: false, file: null as File | null, preview: "" },
  { id: 4, name: "Військово-обліковий документ", checked: false, file: null as File | null, preview: "" },
  { id: 5, name: "Фотокартки 3×4 (6 шт.)", checked: false, file: null as File | null, preview: "" },
];

export default function Profile() {
  const [docs, setDocs] = useState(initialDocuments);
  const [notes, setNotes] = useState("");
  const checkedCount = docs.filter(d => d.checked).length;
  const progress = Math.round((checkedCount / docs.length) * 100);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const saved = localStorage.getItem("profileData");
      if (!saved) return;

      try {
        const data = JSON.parse(saved) as SavedProfileData;
        setDocs(data.docs || initialDocuments);
        setNotes(data.notes || "");
      } catch {
        localStorage.removeItem("profileData");
      }
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify({
      docs: docs.map(d => ({ ...d, file: null })),
      notes
    }));
  }, [docs, notes]);

  const toggleCheck = (id: number) => {
    setDocs(prev => prev.map(doc => doc.id === id ? { ...doc, checked: !doc.checked } : doc));
  };

  const handleFileUpload = (id: number, file: File | null) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert("Максимальний розмір файлу — 10 МБ");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setDocs(prev => prev.map(doc => 
        doc.id === id ? { ...doc, file, preview: e.target?.result as string } : doc
      ));
    };
    reader.readAsDataURL(file);
  };

  const removeFile = (id: number) => {
    setDocs(prev => prev.map(doc => 
      doc.id === id ? { ...doc, file: null, preview: "" } : doc
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Особистий кабінет</h1>
          <p className="text-green-700 mt-2">Рекрутинговий центр ДПСУ</p>
        </div>

        {/* Прогрес-бар */}
        <div className="bg-white rounded-3xl p-8 shadow mb-10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Готовність до подачі</span>
            <span className="text-4xl font-bold text-green-600">{progress}%</span>
          </div>
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-2.5 bg-green-600 rounded-full transition-all duration-700" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Список документів */}
        <div className="bg-white rounded-3xl shadow p-8 mb-10">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            📋 Необхідні документи
          </h2>

          <div className="space-y-5">
            {docs.map((doc) => (
              <div key={doc.id} className="border border-gray-200 rounded-2xl p-6 hover:border-green-600 transition-all group">
                <div className="flex items-center gap-4">
                  <input 
                    type="checkbox" 
                    checked={doc.checked}
                    onChange={() => toggleCheck(doc.id)}
                    className="w-7 h-7 accent-green-600 cursor-pointer"
                  />
                  <div className="flex-1">
                    <p className="text-[17px] font-medium">{doc.name}</p>
                  </div>

                  <label className="cursor-pointer text-sm font-medium px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition">
                    {doc.file ? "Замінити" : "Завантажити файл"}
                    <input 
                      type="file" 
                      className="hidden" 
                      onChange={(e) => handleFileUpload(doc.id, e.target.files?.[0] || null)} 
                    />
                  </label>
                </div>

                {/* Компактне прев'ю */}
                {doc.preview && (
                  <div className="mt-5 flex items-center gap-4 pl-11">
                    <div className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={doc.preview} 
                        alt="Прев'ю завантаженого документа" 
                        className="h-20 w-20 object-cover rounded-xl border border-gray-200 shadow-sm" 
                      />
                      <button 
                        onClick={() => removeFile(doc.id)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center hover:bg-red-600 transition"
                      >
                        ✕
                      </button>
                    </div>
                    <div>
                      <p className="text-sm text-green-700 font-medium">Файл завантажено</p>
                      <p className="text-xs text-gray-500 truncate max-w-[220px]">{doc.file?.name}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Нотатки */}
        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold mb-4">📝 Нотатки та коментарі</h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Запишіть важливу інформацію: дата співбесіди, контакти рекрутера, питання тощо..."
            className="w-full h-48 border border-gray-300 rounded-2xl p-6 focus:border-green-600 focus:ring-1 focus:ring-green-600 outline-none resize-y"
          />
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => alert("✅ Всі документи та дані успішно відправлені рекрутеру!")}
            className="bg-green-700 hover:bg-green-800 text-white px-20 py-6 rounded-2xl text-xl font-semibold shadow-lg transition transform hover:scale-105"
          >
            Надіслати дані рекрутеру
          </button>
        </div>
      </div>
    </div>
  );
}
