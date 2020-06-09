const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  if (blogs.length > 1) {
    blogs.reduce( (total, blog) => {
      return total + blog.likes
    })
  }
  return blogs[0].likes
}

module.exports = {
  dummy,
  totalLikes
}