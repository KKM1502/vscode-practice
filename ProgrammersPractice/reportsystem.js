function solution(id_list, report, k) {
    let answer = []
  
    // 중복 제거 후, 유저 ID, 유저가 신고한 ID 분리
    let reports = [...new Set(report)].map((value) => value.split(' '))
    console.log(reports)
  
    // 신고 당한 ID Map
    let reportId = new Map()
  
    // 신고 당한 ID 카운트
    for ([, report] of reports) {
      reportId.set(report, reportId.get(report) +1||1)
    }
  
    // 메일 발송 ID Map
    let mailId = new Map()
  
    // 메일 발송 갯수 카운트
    for ([user, report] of reports) {
      if (reportId.get(report) >= k) {
        mailId.set(user, mailId.get(user) + 1||1)

      }
    }
  
    // 메일 발송 추출 (없는 경우 0)
    answer = id_list.map((id) => mailId.get(id) || 0)
  
    return answer
  }
get
  