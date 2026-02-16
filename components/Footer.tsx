export default function Footer() {
    return (
        <footer id="contact" className="bg-brand-secondary/20 py-12 border-t border-brand-secondary/30">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-3xl font-bold text-white mb-2">Let's Talk</h2>
                    <p className="text-gray-400">Open for new opportunities.</p>
                </div>
                <div className="flex space-x-6">
                    {/* Social links */}
                    <a
                        href="https://www.instagram.com/peakpoon_pk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-primary transition-colors"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://www.linkedin.com/in/panchiwa-komol-2620a0296/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-primary transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/peakpoonPK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-primary transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1GYp3Tj-nJsAs71d5_3qpUqjWtrbc_pEE/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-primary transition-colors border-l border-gray-600 pl-6 ml-6"
                    >
                        Resume / CV
                    </a>
                </div>
            </div>

        </footer>
    );
}
