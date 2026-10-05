// 手機瀏覽器輸入網址時可能以 http:// 開啟，非安全連線下部分功能無法使用，先轉到 https://
if (location.protocol === 'http:' && !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)) {
  location.replace('https://' + location.host + location.pathname + location.search + location.hash)
}
