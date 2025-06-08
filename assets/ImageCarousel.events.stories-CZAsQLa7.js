import{j as r}from"./jsx-runtime-DoEZbXM1.js";import{r as u,g as p}from"./get-random-image-url-DXPO7Ret.js";import{r as a}from"./index-C66dI-3g.js";import{a as g,B as x}from"./Typography-MRmLycLA.js";import"./index-BnEtvdoB.js";import"./jsx-runtime-Bw5QeaCk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BqBmSIS2.js";import"./index-CcXtbDP-.js";const C={log:(...n)=>{console.log(...n)},error:(...n)=>{console.error(...n)}},k={title:"Components/ImageCarousel",tags:["autodocs"]},f=()=>{const n=a.useRef(null),[m,d]=a.useState(0),s=10;return r.jsxs(r.Fragment,{children:[r.jsx(g,{ref:n,imageSrcList:u(s).map(()=>({src:p({w:500,h:300,seed:1}),alt:""})),onItemClick:({index:e,src:t})=>C.log(`${e}: ${t}`),onChange:e=>d(e)}),r.jsx("div",{style:{padding:"20px"},children:`Current image: ${m+1}/${s}`}),r.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"20px",padding:"20px"},children:[0,1,3,7,9].map(e=>r.jsx(x,{variant:"inline",onClick:()=>{var t;return(t=n.current)==null?void 0:t.scrollToIndex(e)},children:`Jump to ${e+1}`},e))})]})},o=f.bind({});o.parameters={docs:{source:{type:"code"}},chromatic:{disableSnapshot:!0}};var i,c,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const carouselRef = useRef<ImageCarouselForwardRef>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imageCount = 10;
  return <>
      <ImageCarousel ref={carouselRef} imageSrcList={range(imageCount).map(() => ({
      src: getRandomImageUrl({
        w: 500,
        h: 300,
        seed: 1
      }),
      alt: ""
    }))} onItemClick={({
      index,
      src
    }: {
      index: number;
      src: string;
    }) => logger.log(\`\${index}: \${src}\`)} onChange={(index: number) => setCurrentIndex(index)} />
      <div style={{
      padding: "20px"
    }}>{\`Current image: \${currentIndex + 1}/\${imageCount}\`}</div>
      <div style={{
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      padding: "20px"
    }}>
        {[0, 1, 3, 7, 9].map(i => <Button key={i} variant="inline" onClick={() => carouselRef.current?.scrollToIndex(i)}>{\`Jump to \${i + 1}\`}</Button>)}
      </div>
    </>;
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const w=["Comprehensive"];export{o as Comprehensive,w as __namedExportsOrder,k as default};
