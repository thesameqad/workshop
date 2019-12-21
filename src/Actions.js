export function pushData(push)
{
    console.log("pushData called");
    return {
        type:'PUSH_DATA',
        push:push
    };
}

export function pullData(pull)
{
    console.log("pullData called");
    return {
        type:'PULL_DATA',
        pull:pull
    };
}