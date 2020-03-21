import React from "react"

function Random() {
  const reflinks = [
    "http://app.kuailiandp.com/auth/register/ref/d70d60e9-7704-46fa-a943-858ff5f63e72",

    "http://app.kuailiandp.com/auth/register/ref/a5a67f20-a8ea-4bbd-9032-e456deafb284",

    "http://app.kuailiandp.com/auth/register/ref/8effea01-dc72-497e-b89a-271c592db093",
  ]
  const Randomise = () => {
    const ranpath = reflinks[Math.floor(Math.random() * reflinks.length)]
    window.location.href = ranpath
    console.log(ranpath)
  }
  return (
    <div className="registryButton">
      <button
        onClick={() => Randomise()}
        style={{
          backgroundColor: `transparent`,
          color: `white`,
          borderRadius: `29px`,
          width: `100px`,
        }}
      >
        AQUI
      </button>
    </div>
  )
}
export default Random
