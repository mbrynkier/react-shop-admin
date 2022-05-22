import Header from '@components/Header';
import Nav from '@common/Nav';
import Cookie from 'js-cookie';

export default function MainLayout({ children }) {
  const token = Cookie.get('Token')

  return (
    <>
      <div className="min-h-full">
        {token && <Header /> }    
        {token && <Nav /> }            
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
