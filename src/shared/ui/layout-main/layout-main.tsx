import { Box } from "@mui/material";
import styles from './layout-main.module.scss'
import logo from '../../assets/strada-logo.svg'
export default function LayoutMain() {
    return (
        <Box className={styles.layout}>
            <Box className={styles.sidebar}>
                <Box className={styles.logo}>
                    <img src={logo}  width={60} height={60}/>
                </Box>

                <Box className={styles.menu}>
dfd
                </Box>
            </Box>
            <Box className={styles.content}>
                <Box className={styles.panel}>
                    panel
                </Box>
                <Box className={styles.children}>
                    children
                </Box>
            </Box>
        </Box>
    )
}