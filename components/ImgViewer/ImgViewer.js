import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImgViewer(params)
{
    return (
        <>
            <Lightbox
            open={params.open}
            close={params.close}
            slides={params.slides}
            />
        </>
    );

}