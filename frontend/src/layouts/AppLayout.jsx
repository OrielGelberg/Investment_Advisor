import Header from "../components/Header";
import Footer from "../components/Footer";

const defaultHeader = Header;
const defaultFooter = Footer

export default function AppLayout({ header: Header, footer: Footer, mainContent: MainContent }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />


            <main className="flex-1 p-6">
                {<MainContent />}
            </main>

            <Footer />
        </div>
    );
}
