const axios = require('axios');
const loginAndPostTimeLine = require('./RobotFacebook')

//loginAndPostTimeLine();

const browserHeaders = {
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-length": "1028",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryTs1Tq2q15E5BkhfJ",
    "cookie": '_fbp=fb.1.1636413916689.1770752516; glb_uid="F3Gu4FB-OviiRruMomzOfh7pHL6iib6Zazx6pbeyn7k="; nav12732=f9ea242c1c75b7ab8d1045f8909|2_313_12:4:1:10:14:9:3:8:5:15:2_125188:2:2:BR:65-91-15-2361-130-10-17-19-188:26:2:1000222:2:91-1704-2613-15:4; kppid=5315661113338158496; __gads=ID=7cef5e7e7ac167f3:T=1637839684:S=ALNI_MZuURQvr0aPEQThSoddJ_7Knyuc1Q; deepbi_firstparty_cookie=ckwevi1qb5v38da4cxp; FCCDCF=[null,null,["[[],[],[],[],null,null,true]",1637855167124],null,null,null,[]]; _ig=5315661113338158496; _hjSessionUser_83015=eyJpZCI6IjBiNjdhMzJiLWRjMzktNTE2Ny1hZTMxLTVkOGIwYjJlMDJkNiIsImNyZWF0ZWQiOjE2Mzc4Mzk3NjU0NDcsImV4aXN0aW5nIjp0cnVlfQ==; __tbc=%7Bkpbx%7Db7EICeC0YQU7bBwuKRkJ6gztuttFyJ2H76vLuPg5kqH7aDdDbJ9vQ-13_-XBC8V_oeVaNlqF3UNs5KEXI4D8LYb0B4OKdpgoYD8blGCvHh8; _cc_id=b8dde2ede2cad758f5494819d8779594; __qca=P0-1784828634-1638453583752; nav46169=f9ea242c1f7c1ac8e25a6fb1909|2_358; xbc=%7Bkpbx%7DwN3r48z3s4AQzChQjauYWhwUaNxAMnxR736jjWZQ9ygtq0gFOjIG1zhaosnt_Q6sC6lEJYeB8XtxNUbMWpSCIlWv8DIj2TPKNrua7LOLeTZGIbqlLuPnZ4Ljcyl56Of5RXXC5hUnS45x5p0UmmimwKmSbLtG2y-kMiEWbx06H31e_TFXtJVo19Dy1l2J0TfVH-ehY8Na8BRVvhu257uGt2oZINAoe7nh5A1FOLcVKTQg8MbSKd4JA0ZI7AlcbpAfr24dslYgSoaBQY65iQRTPF1g67lh36x7plADKpsKmi2AFCPUkD1Z5lde7sFseOCqhpCfFqipvZAiTyvdmvF2Pn7FUrCJ0xpxoXwlZYFlF6ca2qUqTV27XH4_l5mC3BxYSAVgSIuwaQ4zVjARmyZCVJYUrwx6qjXxHuEmqFEXppVl4hmouVyvnITSN84jb_kDW-sWYxfic_k5lT1HHxC9MfT7g5da-wUmTIez7eGFc4NJuWiiw_S4lm3RqaC1n4JFqrpONNZyyLn_pHASBkSrQdUNBpNwV45wUzx0jK_jFWzDNLrfJUIbiC744xXa_h0IMIioF5YahlBWMWcG-t7KA1DugwCsIgiVQmtbJmdWYOYOa0lzqHEBoDVKsqlT5lrDxre8U7AD3fLoDIHAu1TUqgWCrMvm8L8cwTOOsIam51Z86bi12_-OzDyHlIe-imIE; cookie-banner-consent-accepted=true; cookie-banner-accepted-version=1.3.2.1; FCNEC=[["AKsRol9Z6y0ZIPa2qnyWKJp6ZsfbsOkVpecJ91rwe3kUO6-7jrOHPwDWHXuz2XbEIwSVef0_9Vs4i88OsZ69fAXjPeoiFRk3FG6lfbI2gWUFwVambo2YXnY0MhAH03omF5eBhSdohStK1XA8CvSqfR0y0ta-U29Myg=="],null,[]]; _ga_97G0DGT80G=GS1.1.1642093567.3.0.1642093567.0; permutive-id=728b63fa-0159-4849-bd35-fce028888f9d; _ga_5MYG7XRXHX=GS1.1.1643808416.2.0.1643808430.0; _ga_K8B6Y0T4CS=GS1.1.1647207189.2.0.1647207189.60; GLBEXP=4qXNFAx8cYeMZx4K3Gjb5qncVZ4ngTsbGAHZsWUq4pM=; _gcl_au=1.1.879252040.1647373098; hsid=e16cbc32-d65c-4727-acd7-aa7dd63a57b5; _gid=GA1.2.146445641.1647518960; pbjs_sharedId=bd437ac5-04d5-44a6-bf0a-236edee49c20; cto_bundle=BPxYOV9rNmtSZ3FKcWJha0l3b21lc0NUWmFmZ2QlMkJyTmpMSUVIZXQ0aVdtWkpMdHo3VmNGdXo0Y3JtWUdGWjhvRVpVdXlNdmZHUDJRQmU3NzlUdGxOTWZYekhGV1FoaTZuV0Nhbm1CcmhGSU5qdUxsR3pjeFNNWUwyRE5EdDBtbyUyQnI2ajV1MzZkd0F2c0FzVmdvb2VpRkR4d3dnJTNEJTNE; _ga_P4F3TC8HVE=GS1.1.1647518960.10.1.1647519019.0; utag_main=v_id:017d01deaec2001471034d3a498e05072007e06a00bd0$_sn:17$_ss:0$_st:1647520820733$_se:2$ses_id:1647518958845%3Bexp-session$_pn:2%3Bexp-session; nav13574=f9ea242c1db12a06e960adf9809|2_77_12:4:1:11:14:15:5:2_101550-114395-113384-103666-230868-105130-125185-222466-125188-222469:2:2:48:137-134-106-130-124-61-10-11-3-69:24-1704-15-2-137-91-87-2613-19:2:4; _ga=GA1.2.1945855256.1636413916; _ga_4DF8YFDHV7=GS1.1.1647519021.3.1.1647519026.0',
    "origin": "https://g1.globo.com",
    "referer": "https://g1.globo.com/mundo/ao-vivo/guerra-ucrania-russia-putin-invasao.ghtml",
    "sec-ch-ua": '"Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': "Windows",
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'no-cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
}

const getPage = () => {
    
    const options = {
        headers: {browserHeaders}
    }
    return axios.get("https://g1.globo.com/mundo/ao-vivo/guerra-ucrania-russia-putin-invasao.ghtml?postId=f4f73ddb-df7a-445b-8300-144d2842b29b",options)
}

getPage().then(console.log).catch(console.error);