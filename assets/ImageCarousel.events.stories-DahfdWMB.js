import{j as r}from"./jsx-runtime-DoEZbXM1.js";import{r as u,a as p}from"./static-images-DWbaK-X6.js";import{r as s}from"./index-C66dI-3g.js";import{a as g,B as x}from"./Tag-I61JJZtN.js";import"./jsx-runtime-Bw5QeaCk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BnEtvdoB.js";import"./index-BqBmSIS2.js";import"./index-CcXtbDP-.js";const C={log:(...n)=>{console.log(...n)},error:(...n)=>{console.error(...n)}},b={title:"Components/ImageCarousel",tags:["autodocs"]},f=()=>{const n=s.useRef(null),[d,m]=s.useState(0),a=10;return r.jsxs(r.Fragment,{children:[r.jsx(g,{ref:n,imageSrcList:u(a).map(()=>({src:p,alt:""})),onItemClick:({index:e,src:o})=>C.log(`${e}: ${o}`),onChange:e=>m(e)}),r.jsx("div",{style:{padding:"20px"},children:`Current image: ${d+1}/${a}`}),r.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"20px",padding:"20px"},children:[0,1,3,7,9].map(e=>r.jsx(x,{variant:"inline",onClick:()=>{var o;return(o=n.current)==null?void 0:o.scrollToIndex(e)},children:`Jump to ${e+1}`},e))})]})},t=f.bind({});t.parameters={docs:{source:{type:"code"}},chromatic:{disableSnapshot:!0}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const carouselRef = useRef<ImageCarouselForwardRef>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imageCount = 10;
  return <>
      <ImageCarousel ref={carouselRef} imageSrcList={range(imageCount).map(() => ({
      src: aiLandscape_1,
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const k=["Advanced"];export{t as Advanced,k as __namedExportsOrder,b as default};
