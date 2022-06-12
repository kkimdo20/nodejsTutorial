// @ts-check
// 프레임 워크 없이 웹 서버 ㄱㄱ

/**
 *   블로그 포스팅 서비스
 *   - 로컬 파일을 데이터베이스로 활용
 *   - 인증 로직은 넣지 않는다.
 *   - RESTful API 사용
 */
const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}`)
})
