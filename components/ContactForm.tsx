'use client';

import { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  aircraft: '',
  origin: '',
  destination: '',
  date: '',
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('Preencha pelo menos nome, email e mensagem.');
      return;
    }
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (response.ok) {
      setStatus('Recebemos sua solicitação! Retornaremos em breve.');
      setForm(initialState);
    } else {
      setStatus('Algo deu errado. Tente novamente ou utilize nossos contatos diretos.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" required placeholder="Nome" value={form.name} onChange={handleChange} className="input" />
        <input name="email" required type="email" placeholder="E-mail" value={form.email} onChange={handleChange} className="input" />
        <input name="phone" placeholder="Telefone" value={form.phone} onChange={handleChange} className="input" />
        <input name="company" placeholder="Empresa" value={form.company} onChange={handleChange} className="input" />
        <input name="aircraft" placeholder="Tipo de aeronave" value={form.aircraft} onChange={handleChange} className="input" />
        <input name="date" placeholder="Data estimada" value={form.date} onChange={handleChange} className="input" />
        <input name="origin" placeholder="Origem" value={form.origin} onChange={handleChange} className="input" />
        <input name="destination" placeholder="Destino" value={form.destination} onChange={handleChange} className="input" />
      </div>
      <textarea name="message" rows={5} placeholder="Mensagem" value={form.message} onChange={handleChange} className="input"></textarea>
      <button type="submit" className="w-full py-3 rounded-full bg-ink text-white font-semibold hover:bg-accent">
        Enviar Solicitação
      </button>
      {status && <p className="text-sm text-ink/70">{status}</p>}
    </form>
  );
}
