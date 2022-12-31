import { Inter as fontInter } from "@next/font/google";

const Thin = fontInter({subsets: ['latin'],weight: '100'});
const ExtraLight = fontInter({subsets: ['latin'],weight: '200'});
const Light = fontInter({subsets: ['latin'],weight: '300'});
const Regular = fontInter({subsets: ['latin'],weight: '400'});
const Medium = fontInter({subsets: ['latin'],weight: '500'});
const Semibold = fontInter({subsets: ['latin'],weight: '600'});
const Bold = fontInter({subsets: ['latin'],weight: '700'});
const ExtraBold = fontInter({subsets: ['latin'], weight: '800'});

// const Inter = {
//    Thin : Thin.variable,
//    ExtraLight : ExtraLight.variable,
//    Light : Light.variable,
//    Regular : Regular.variable,
//    Medium : Medium.variable,
//    Semibold : Semibold.variable,
//    Bold : Bold.variable,
//    ExtraBold : ExtraBold.variable
// }

const Inter = {
   Thin : Thin.style.fontFamily,
   ExtraLight : ExtraLight.style.fontFamily,
   Light : Light.style.fontFamily,
   Regular : Regular.style.fontFamily,
   Medium : Medium.style.fontFamily,
   Semibold : Semibold.style.fontFamily,
   Bold : Bold.style.fontFamily,
   ExtraBold : ExtraBold.style.fontFamily
}

const InitialGlobalFont = () => {
   return (
      <style jsx global>{`
          :root {
            --font-inter-thin: ${Inter.Thin};
            --font-inter-extralight: ${Inter.ExtraLight};
            --font-inter-light: ${Inter.Light};
            --font-inter-regular: ${Inter.Regular};
            --font-inter-medium: ${Inter.Medium};
            --font-inter-semibold: ${Inter.Semibold};
            --font-inter-bold: ${Inter.Bold};
            --font-inter-extrabold: ${Inter.ExtraBold};
          }
        `}</style>
   )
}

export default InitialGlobalFont