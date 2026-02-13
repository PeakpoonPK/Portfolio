export default function Footer() {
    return (
        <footer id="contact" className="bg-brand-secondary/20 py-12 border-t border-brand-secondary/30">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-3xl font-bold text-white mb-2">Let's Talk</h2>
                    <p className="text-gray-400">Open for new opportunities.</p>
                </div>
                <div className="flex space-x-6">
                    {/* Social placeholders */}
                    <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">GitHub</a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-brand-secondary/30 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Serge Studios Inspired. All rights reserved.
            </div>
        </footer>
    );
}
