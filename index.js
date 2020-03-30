const axios = require('axios')

const match = process.env.BRANCH.match(/((?!([A-Z0-9a-z]{1,10})-?$)[A-Z]{1}[A-Z0-9]+-\d+)/g);

console.log("Match: ", match)

if (!match) {
    console.error("Branch name should be formatted like the following PV-345_this_is_a_branch.  Please check your branch name and try again.")
    process.exit(1)
} else {
    const ajax = axios.create({
        baseURL: process.env.DEPLOYMENT_API_URL,
        timeout: 1000
    });

    const payload = {
        issueKey: match[0],
        repoName: process.env.REPO_NAME
    }

    console.log("Payload: ", payload)

    ajax({
        method: 'post',
        url: '/api/webhooks/issue-repo',
        data: payload
    }).then(() => {
        process.exit(0)
    }).catch((err) => {
        console.error(err)
        process.exit(1)
    })
}