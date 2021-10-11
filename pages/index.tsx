import Main from "@/components/Main"
import { getAppLayout } from "@/components/AppLayout"

import { NextPageWithLayout } from "@/types/app.type"

const Home: NextPageWithLayout = () => {
    return (
        <Main title="Home" className="container">
            <div>
                
            </div>
        </Main>
    )
}

Home.getLayout = getAppLayout

export default Home
