import ContentLoader from "react-content-loader"
import { IContentLoaderProps } from "react-content-loader"

const CardLoader = (props: IContentLoaderProps) => (
    <ContentLoader
        speed={2}
        width={350}
        height={600}
        viewBox="0 0 350 600"
        backgroundColor="#182E3A"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="86" y="349" rx="2" ry="2" width="165" height="48" />
        <rect x="102" y="414" rx="2" ry="2" width="140" height="20" />
        <rect x="45" y="60" rx="2" ry="2" width="260" height="260" />
        <rect x="102" y="450" rx="2" ry="2" width="140" height="20" />
        <rect x="24" y="490" rx="2" ry="2" width="289" height="42" />
    </ContentLoader>
)

export default CardLoader
