// import { useRouter } from 'next/router';
import Header from './Header';
import Navigator from './Navigator';

function Layout({
    children
}: {
    children: string | JSX.Element | JSX.Element[] 
}) {

    // const route = useRouter();

    return ( 
        <div className="main_layout h-screen flex flex-col justify-between pt-16" >
            <Header />
            <Navigator />
            <div className="content flex justify-center w-[calc(100vw - 18px)]">
                {
                    children
                }
                {/* Content */}
            </div>
            <div className="footer flex justify-center">
                Footer
            </div>
        </div>
     );
}

export default Layout;