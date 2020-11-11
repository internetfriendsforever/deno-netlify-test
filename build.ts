async function build () {
  await Deno.mkdir("dist", { recursive: true })
  await Deno.writeTextFile("./dist/index.html", "Hello Deno!")
  console.log("Build complete")
}

build()
