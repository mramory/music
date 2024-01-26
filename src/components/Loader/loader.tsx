import { Loader2 } from "lucide-react"
import s from "./styles.module.scss"

export const Loader = () => {
    return(
        <aside className={s.container}>
            <Loader2 size={64} className="animate-spin" />
        </aside>
    )
}