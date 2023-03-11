import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ImgViewer(params)
{
    const [open, setOpen] = useState(false);

    return (
        <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg" },
          { src: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg" },
          { src: "https://www.lg.com/ar/images/televisores/md06198536/gallery/DES_1_N.jpg" },
        ]}
      />
    );

}