import Main from "@/components/Main"
import { getAppLayout } from "@/components/AppLayout"

import { NextPageWithLayout } from "@/types/app.type"

const Verification: NextPageWithLayout = () => {
    return (
        <Main title="Verifikasi" className="container">
            <div>
                
            </div>
        </Main>
    )
}

Verification.getLayout = getAppLayout

export default Verification
