const parent = React.createElement('div', { id: "parent" },"iam a parent")
const child = React.createElement('div', { id: "child" }, "ima child", [React.createElement('h1', {}, "iam a h1 tag"),
React.createElement('h2', {}, "iam a h2 tag"),
    React.createElement('h3', {}, "iam a h3 tag"),
React.createElement('p',{},"iam para")
])

ReactDOM.render(parent, document.getElementById('root'))
ReactDOM.render(child, document.getElementById('root'))