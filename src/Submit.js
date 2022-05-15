import {createEffect} from "effector";

const sendFormFx = createEffect(
    formData =>
        new Promise(rs =>
            setTimeout(rs, 1000, `Signed in as [${formData.get('name')}]`),
        ),
);
sendFormFx.doneData.watch(res=>console.log(res));
sendFormFx.doneData('hello')
export const Submit = () => {
  return(<div>
      Submit
  </div>)
}