window.AA.getCookie = AA.getCookie = ( cookieName ) ->
  results = document.cookie.match ('(^|;) ?' + cookieName + '=([^;]*)(;|$)')

  if results
    unescape (results[2])
  else
    null
