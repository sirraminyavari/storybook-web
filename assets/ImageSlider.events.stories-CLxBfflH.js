import{j as r}from"./jsx-runtime-DoEZbXM1.js";import{r as p,a as g}from"./static-images-DWbaK-X6.js";import{r as s}from"./index-C66dI-3g.js";import{a as u,B as x}from"./Tag-C8EOk88Y.js";import"./jsx-runtime-Bw5QeaCk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BnEtvdoB.js";import"./index-BqBmSIS2.js";import"./index-CcXtbDP-.js";const f={log:(...n)=>{console.log(...n)},error:(...n)=>{console.error(...n)}},b={title:"Components/ImageSlider/Advanced",tags:["autodocs"]},C=()=>{const n=s.useRef(null),[l,m]=s.useState(0),o=10;return r.jsxs(r.Fragment,{children:[r.jsx(u,{ref:n,imageSrcList:p(o).map(()=>({src:g,alt:""})),onItemClick:({index:e,src:a})=>f.log(`${e}: ${a}`),onChange:e=>m(e)}),r.jsx("div",{style:{padding:"20px"},children:`Current image: ${l+1}/${o}`}),r.jsx("div",{style:{display:"flex",flexDirection:"row",gap:"20px",padding:"20px"},children:[0,1,3,7,9].map(e=>r.jsx(x,{variant:"inline",onClick:()=>{var a;return(a=n.current)==null?void 0:a.scrollToIndex(e)},children:`Navigate to ${e+1}`},e))})]})},t=C.bind({});t.parameters={docs:{source:{type:"code"}},chromatic:{disableSnapshot:!0}};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const sliderRef = useRef<ImageSliderForwardRef>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imageCount = 10;
  return <>
      <ImageSlider ref={sliderRef} imageSrcList={range(imageCount).map(() => ({
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
        {[0, 1, 3, 7, 9].map(i => <Button key={i} variant="inline" onClick={() => sliderRef.current?.scrollToIndex(i)}>{\`Navigate to \${i + 1}\`}</Button>)}
      </div>
    </>;
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const k=["Advanced"];export{t as Advanced,k as __namedExportsOrder,b as default};
