/* eslint-disable no-useless-escape */
export const introText = `
# Introduction

The IOTA Sandbox is a service provided by the Foundation that makes it possible to start using IOTA
without having to go through the hassle of installing, configuring and setting up your local client.

The sandbox acts as an IOTA node that does Proof of Work for you, which means that you can start
testing and developing new applications, even with tiny IoT devices, all by simply making API calls
to the sandbox environment.

Under the hood, after each call to \`attachToTangle\`, a small worker node spins up inside
of a docker container to compute the PoW. The results are exposed through a RESTful API.
`;

export const authenticationText = `
# Authentication

By default, the API is rate limited per IP address to 5 \`attachToTangle\` calls per minute.
If this is not enough to support your development workflow, simply authenticate to the sandbox
through GitHub below to receive an API token. Including a valid API token with your requests
(in the \`Authorization\` HTTP header) will bypass the rate limiter.
`;

export const usageText = `
# Usage

The easiest way to use the sandbox is through an official IOTA library. Follow the normal instructions
to set up a development environment using your preferred IOTA SDK, and point the SDK to the sandbox
API anywhere you would put the IOTA Node URI.
`;

export const apiDocs = `
# API

### /api/v1/commands

This endpoint serves as the IOTA Node wrapper. With the exception of \`attachToTangle\`,
refer to the [IOTA documentation](https://iota.readme.io/reference) for details.

Available commands:

- [getNodeInfo](https://iota.readme.io/reference#getnodeinfo)
- [getTips](https://iota.readme.io/reference#gettips)
- [findTransactions](https://iota.readme.io/reference#findtransactions)
- [getTrytes](https://iota.readme.io/reference#gettrytes)
- [getInclusionStates](https://iota.readme.io/reference#getinclusionstates)
- [getBalances](https://iota.readme.io/reference#getbalances)
- [getTransactionsToApprove](https://iota.readme.io/reference#gettransactionstoapprove)
- [attachToTangle](https://iota.readme.io/reference#attachtotangle)
- [broadcastTransactions](https://iota.readme.io/reference#broadcasttransactions)
- [storeTransactions](https://iota.readme.io/reference#storetransactions)

### /api/v1/commands#attachToTangle

\`attachToTangle\` responds with a JSON object of the format:

\`\`\`
{
    "jobId": "5a3e99b3be97ff7691afc6aa"
}
\`\`\`

### /api/v1/jobs/:id

Use the \`jobId\` obtained from \`attachToTangle\` to check on the status of your
Proof of Work.

JSON response:

\`\`\`
{
    "_id": "5a3e99b3be97ff7691afc6aa",
    "updatedAt": "2017-12-23T18:00:20.059Z",
    "createdAt": "2017-12-23T18:00:19.609Z",
    "progress": "100",
    "response": "[\"BYSWEAUTWXHXZ9YBZISEK9LUHWGMHXCGEVNZHRLUWQFCUSDXZHOFHWHL9MQPVJXXZLIXPXPXF9KYEREFSKCPKYIIKPZVLHUTDFQKKVVBBN9ATTLPCNPJDWDEVIYYLGPZGCWXOBDXMLJC9VO9QXTTBLAXTTBFUAROYEGQIVB9MJWJKXJMCUPTWAUGFZBTZCSJVRBGMYXTVBDDS9MYUJCPZ9YDWWQNIPUAIJXXSNLKUBSCOIJPCLEFPOXFJREXQCUVUMKSDOVQGGHRNILCO9GNCLWFM9APMNMWYASHXQAYBEXF9QRIHIBHYEJOYHRQJAOKAQ9AJJFQ9WEIWIJOTZATIBOXQLBMIJU9PCGBLVDDVFP9CFFSXTDUXMEGOOFXWRTLFGV9XXMYWEMGQEEEDBTIJ9OJOXFAPFQXCDAXOUDMLVYRMRLUDBETOLRJQAEDDLNVIRQJUBZBO9CCFDHIX9MSQCWYAXJVWHCUPTRSXJDESISQPRKZAFKFRULCGVRSBLVFOPEYLEE99JD9SEBALQINPDAZHFAB9RNBH9AZWIJOTLBZVIEJIAYGMC9AZGNFWGRSWAXTYSXVROVNKCOQQIWGPNQZKHUNODGYADPYLZZZUQRTJRTODOUKAOITNOMWNGHJBBA99QUMBHRENGBHTH9KHUAOXBVIVDVYYZMSEYSJWIOGGXZVRGN999EEGQMCOYVJQRIRROMPCQBLDYIGQO9AMORPYFSSUGACOJXGAQSPDY9YWRRPESNXXBDQ9OZOXVIOMLGTSWAMKMTDRSPGJKGBXQIVNRJRFRYEZ9VJDLHIKPSKMYC9YEGHFDS9SGVDHRIXBEMLFIINOHVPXIFAZCJKBHVMQZEVWCOSNWQRDYWVAIBLSCBGESJUIBWZECPUCAYAWMTQKRMCHONIPKJYYTEGZCJYCT9ABRWTJLRQXKMWY9GWZMHYZNWPXULNZAPVQLPMYQZCYNEPOCGOHBJUZLZDPIXVHLDMQYJUUBEDXXPXFLNRGIPWBRNQQZJSGSJTTYHIGGFAWJVXWL9THTPWOOHTNQWCNYOYZXALHAZXVMIZE9WMQUDCHDJMIBWKTYH9AC9AFOT9DPCADCV9ZWUTE9QNOMSZPTZDJLJZCJGHXUNBJFUBJWQUEZDMHXGBPTNSPZBR9TGSKVOHMOQSWPGFLSWNESFKSAZY9HHERAXALZCABFYPOVLAHMIHVDBGKUMDXC9WHHTIRYHZVWNXSVQUWCR9M9RAGMFEZZKZ9XEOQGOSLFQCHHOKLDSA9QCMDGCGMRYJZLBVIFOLBIJPROKMHOYTBTJIWUZWJMCTKCJKKTR9LCVYPVJI9AHGI9JOWMIWZAGMLDFJA9WU9QAMEFGABIBEZNNAL9OXSBFLOEHKDGHWFQSHMPLYFCNXAAZYJLMQDEYRGL9QKCEUEJ9LLVUOINVSZZQHCIKPAGMT9CAYIIMTTBCPKWTYHOJIIY9GYNPAJNUJ9BKYYXSV9JSPEXYMCFAIKTGNRSQGUNIYZCRT9FOWENSZQPD9ALUPYYAVICHVYELYFPUYDTWUSWNIYFXPX9MICCCOOZIWRNJIDALWGWRATGLJXNAYTNIZWQ9YTVDBOFZRKO9CFWRPAQQRXTPACOWCPRLYRYSJARRKSQPR9TCFXDVIXLP9XVL99ERRDSOHBFJDJQQGGGCZNDQ9NYCTQJWVZIAELCRBJJFDMCNZU9FIZRPGNURTXOCDSQGXTQHKHUECGWFUUYS9J9NYQ9U9P9UUP9YMZHWWWCIASCFLCMSKTELZWUGCDE9YOKVOVKTAYPHDF9ZCCQAYPJIJNGSHUIHHCOSSOOBUDOKE9CJZGYSSGNCQJVBEFTZFJ9SQUHOASKRRGBSHWKBCBWBTJHOGQ9WOMQFHWJVEG9NYX9KWBTCAIXNXHEBDIOFO9ALYMFGRICLCKKLG9FOBOX9PDWNQRGHBKHGKKRLWTBEQMCWQRLHAVYYZDIIPKVQTHYTWQMTOACXZOQCDTJTBAAUWXSGJF9PNQIJ9AJRUMUVCPWYVYVARKR9RKGOUHHNKNVGGPDDLGKPQNOYHNKAVVKCXWXOQPZNSLATUJT9AUWRMPPSWHSTTYDFAQDXOCYTZHOYYGAIM9CELMZ9AZPWB9MJXGHOKDNNSZVUDAGXTJJSSZCPZVPZBYNNTUQABSXQWZCHDQSLGK9UOHCFKBIBNETK999999999999999999999999999999999999999999999999999999999999999999999999999999999NOXDXXKUDW99999999999999999PGDNLQOLQS99EQYKBIU9VHCJVIPFUYCQDNY9APGEVYLCENJIOBLWNB999999999XKBRHUD99C99999999NKZKEKWLDKMJCI9N9XQOLWEPAYWSH9999999999999999999999999BAJMO9AFKREDQZRDNGDWSBAFMCHSSOFA9JV9GNXUHAXICWUP9EOSDOHEPLKXVHQPGURNKVIY9AKGDPONTLLJDW9NTJHKYWIWEGIF9WDQCNHGGJOUHMYLGAOAUOFKWTFFFNSAJLBJTHWQAWFBNAPZAXKXWNL9K99999IROUICDOXKSYZTDPEDKOQENTJOWJONDEWROCEJIEWFWLUAACVSJFTM9LHXJBJRKADPUDXXVXFWP9X9999\",\"999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999A9RGRKVGWMWMKOLVMDFWJUHNUNYWZTJADGGPZGXNLERLXYWJE9WQHWWBMCPZMVVMJUMWWBLZLNMLDCGDJ999999999999999999999999999999999999999999999999999999YGYQIVD99999999999999999999TXEFLKNPJRBYZPORHZU9CEMFIFVVQBUSTDGSJCZMBTZCDTTJVUFPTCCVHHORPMGCURKTH9VGJIXUQJVHKLLJDW9NTJHKYWIWEGIF9WDQCNHGGJOUHMYLGAOAUOFKWTFFFNSAJLBJTHWQAWFBNAPZAXKXWNL9K99999LLJDW9NTJHKYWIWEGIF9WDQCNHGGJOUHMYLGAOAUOFKWTFFFNSAJLBJTHWQAWFBNAPZAXKXWNL9K999999999999999999999999999999999999999999999999999999999999C99999999C9999999999999999\"]"
}
\`\`\`

`;
