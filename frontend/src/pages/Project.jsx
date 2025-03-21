import Spline from "@splinetool/react-spline";

{/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.79/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/vglwSU-KXls6RsC0/scene.splinecode"></spline-viewer> */}

export default function Project(){
    return (
       <div>
        <div>
        <Spline scene="https://prod.spline.design/vglwSU-KXls6RsC0/scene.splinecode" />

        </div>
       </div>
    )
}