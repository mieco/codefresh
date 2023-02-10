export default async function initData() {
  try {
    const ret = await Deno.stat("./data/foods.json")
    // console.log(ret);
  } catch (error) {
    // await 
  }
}