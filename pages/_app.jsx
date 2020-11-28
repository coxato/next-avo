// app extends, this ideal place for providers and pass props to our app
import Layout from '@components/Layouts/layout';

function MyApp({ Component, pageProps }) {
    // you can envolve providers, layouts, themes and other sttuf

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )

}

export default MyApp;