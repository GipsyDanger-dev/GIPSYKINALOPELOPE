import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20 px-4"
        >
            <RevealOnScroll>
                {/* Kita tetap pakai max-w-4xl, ini sudah cukup lebar */}
                <div className="w-full max-w-4xl">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-6">

                        {/* ===== MULAI PERUBAHAN DI SINI ===== */}
                        {/* 1. Div pembungkus untuk layout flexbox di layar medium (md) ke atas */}
                        <div className="md:flex md:space-x-6">
                            {/* 2. Input Nama sekarang lebarnya setengah di layar md ke atas */}
                            <div className="relative md:w-1/2">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-white/5 border border-white/5 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 mb-6 md:mb-0" // Tambah margin bawah untuk mobile
                                    placeholder="Name..."
                                />
                            </div>

                            {/* 3. Input Email juga lebarnya setengah di layar md ke atas */}
                            <div className="relative md:w-1/2">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-white/5 border border-white/5 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500"
                                    placeholder="Example@gmail.com"
                                />
                            </div>
                        </div>
                        {/* ===== AKHIR PERUBAHAN ===== */}


                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/5 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500"
                                placeholder="Your message..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};