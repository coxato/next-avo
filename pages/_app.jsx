// app extends, this ideal place for providers and pass props to our app
import CartHOC from '@store/cart';
import 'semantic-ui-css/semantic.min.css'
import '../global.css';

// nextjs method to get app metrics
// this method only works in _app (is this file)
export const reportWebVitals = metrics => {
    // you can send data for analytics
    console.log(metrics);
}

function MyApp({ Component, pageProps }) {
    // you can envolve providers, layouts, themes and other sttuf

    return (
        <CartHOC>
            <Component {...pageProps} />
        </CartHOC>
    )

}

export default MyApp;