export enum Route {
    Documents,
    Datacodes
}

export interface State {
    documents: {[name: string]: string};
    datacodes: {[name: string]: string[]}
    route: Route;
}

const from = 
`<notes><dcnote ntype="level1"><data-desc-ref datacode="420-009" output="data-code"/>,<data-desc-ref datacode="420-022" output="data-code"/>,<data-desc-ref datacode="420-024" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-037" output="data-code"/>,<data-desc-ref datacode="420-051" output="data-code"/>,<data-desc-ref datacode="420-058" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-059" output="data-code"/>,<data-desc-ref datacode="420-073" output="data-code"/>,<data-desc-ref datacode="420-074" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-075" output="data-code"/>,<data-desc-ref datacode="420-103" output="data-code"/>,<data-desc-ref datacode="420-111" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-132" output="data-code"/>,<data-desc-ref datacode="420-162" output="data-code"/></dcnote>
<dcnote ntype="level1"><data-desc-ref datacode="420-190" output="data-code"/>,<data-desc-ref datacode="420-1BJ" output="data-code"/>,<data-desc-ref datacode="420-1BK" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1BM" output="data-code"/>,<data-desc-ref datacode="420-1BN" output="data-code"/>,<data-desc-ref datacode="420-1CC" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1CE" output="data-code"/>,<data-desc-ref datacode="420-1CF" output="data-code"/>,<data-desc-ref datacode="420-1CX" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1DN" output="data-code"/>,<data-desc-ref datacode="420-1EY" output="data-code"/>,<data-desc-ref datacode="420-1FD" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1FV" output="data-code"/>,<data-desc-ref datacode="420-1FX" output="data-code"/>,<data-desc-ref datacode="420-1FY" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1G6" output="data-code"/>,<data-desc-ref datacode="420-1GP" output="data-code"/>,<data-desc-ref datacode="420-1GR" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1GT" output="data-code"/>,<data-desc-ref datacode="420-1H0" output="data-code"/>,<data-desc-ref datacode="420-1H1" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1H2" output="data-code"/>,<data-desc-ref datacode="420-1H3" output="data-code"/>,<data-desc-ref datacode="420-1H5" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1HF" output="data-code"/>,<data-desc-ref datacode="420-1J3" output="data-code"/>,<data-desc-ref datacode="420-1JU" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref output="data-code" datacode="420-1JH"/>,<data-desc-ref output="data-code" datacode="420-1K3"/>,<data-desc-ref datacode="420-1K4" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1K5" output="data-code"/>,<data-desc-ref datacode="420-1K6" output="data-code"/>,<data-desc-ref datacode="420-1N5" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1N6" output="data-code"/>,<data-desc-ref output="data-code" datacode="420-1N8"/>,<data-desc-ref datacode="420-1P8" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-200" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-215" output="data-code"/>,<data-desc-ref datacode="420-219" output="data-code"/>,<data-desc-ref datacode="420-227" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-236" output="data-code"/>,<data-desc-ref datacode="420-248" output="data-code"/>,<data-desc-ref datacode="420-269" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-270" output="data-code"/></dcnote></notes>`;

const to =
`<notes><dcnote ntype="level1"><data-desc-ref datacode="420-009" output="data-code"/>,<data-desc-ref datacode="420-022" output="data-code"/>,<data-desc-ref datacode="420-024" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-037" output="data-code"/>,<data-desc-ref datacode="420-051" output="data-code"/>,<data-desc-ref datacode="420-058" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-059" output="data-code"/>,<data-desc-ref datacode="420-073" output="data-code"/>,<data-desc-ref datacode="420-074" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-075" output="data-code"/>,<data-desc-ref datacode="420-103" output="data-code"/>,<data-desc-ref datacode="420-111" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-132" output="data-code"/>,<data-desc-ref datacode="420-162" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-190" output="data-code"/>,<data-desc-ref datacode="420-1BJ" output="data-code"/>,<data-desc-ref datacode="420-1BK" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1BM" output="data-code"/>,<data-desc-ref datacode="420-1BN" output="data-code"/>,<data-desc-ref datacode="420-1CC" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1CE" output="data-code"/>,<data-desc-ref datacode="420-1CF" output="data-code"/>,<data-desc-ref datacode="420-1CX" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1DN" output="data-code"/>,<data-desc-ref datacode="420-1EY" output="data-code"/>,<data-desc-ref datacode="420-1FD" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1FV" output="data-code"/>,<data-desc-ref datacode="420-1FX" output="data-code"/>,<data-desc-ref datacode="420-1FY" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1G6" output="data-code"/>,<data-desc-ref datacode="420-1GP" output="data-code"/>,<data-desc-ref datacode="420-1GR" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1GT" output="data-code"/>,<data-desc-ref datacode="420-1H0" output="data-code"/>,<data-desc-ref datacode="420-1H1" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1H2" output="data-code"/>,<data-desc-ref datacode="420-1H3" output="data-code"/>,<data-desc-ref datacode="420-1H5" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1HF" output="data-code"/>,<data-desc-ref datacode="420-1J3" output="data-code"/>,<data-desc-ref datacode="420-1JU" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref output="data-code" datacode="420-1JH"/>,<data-desc-ref output="data-code" datacode="420-1K3"/>,<data-desc-ref datacode="420-1K4" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1K5" output="data-code"/>,<data-desc-ref datacode="420-1K6" output="data-code"/>,<data-desc-ref datacode="420-1N5" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-1N6" output="data-code"/>,<data-desc-ref output="data-code" datacode="420-1N8"/>,<data-desc-ref datacode="420-1P8" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-200" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-215" output="data-code"/>,<data-desc-ref datacode="420-219" output="data-code"/>,<data-desc-ref datacode="420-227" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-236" output="data-code"/>,<data-desc-ref datacode="420-248" output="data-code"/>,<data-desc-ref datacode="420-269" output="data-code"/></dcnote> 
<dcnote ntype="level1"><data-desc-ref datacode="420-270" output="data-code"/>,<data-desc-ref datacode="420-1DR" output="data-code"/></dcnote></notes>`;

export const initialState: State = {
    documents: {
        From: from,
        To: to
    },
    datacodes: {},
    route: Route.Documents
}
