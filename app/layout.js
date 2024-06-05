import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import ContactButton from '@constants/ContactButton';

export const metadata = {
  title: "Proxy Real Estate",
  description: "The world's leading real estate brokerage services"
};


const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <main className='font-oxanium relative'>
                <Navbar />
                {children}
                <Footer />

                <div className='bottom-28 right-0 z-20 fixed'>
                  <ContactButton />
                </div>
                
            </main>
        </body>
    </html>
  )
};

export default RootLayout;