[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10330209)
# CS477-2023-03-Quiz03
1. What is the difference between settimeout and setImmediate?
2. What is the output of the following code?
setTimeout(() => {
    console.log(1)
}, 0);

process.nextTick(() => {
    console.log(2)
})

setImmediate(() => {
    console.log(3);
})
