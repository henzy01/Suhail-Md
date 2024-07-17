const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="henzymic@gmail.com"
global.location="Africa,Lagos."


global.mongodb= process.env.MONGODB_URI || "Micahhenry@cluster0.uuwrp6u.mongodb.net"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://henzy_user:OLteyiBhXCQ3v2UjFafVWqLKESIy6Jr6@dpg-cpm8si5ds78s738vrm60-a.oregon-postgres.render.com/henzy"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "null";
global.gurl  =process.env.GURL  || "null";
global.website=process.env.GURL || "null" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b8e333e4576ebeb4efb98.jpg,https://telegra.ph/file/384ab6d5455e8f11630f5.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "HENZY_VIBES" 


global.devs = "2349137163860" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137163860";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349137163860,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_52_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDM0LFxuICAgICAgICAzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzksXG4gICAgICAgIDUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxODksXG4gICAgICAgIDY1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjksXG4gICAgICAgIDMsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICA4LFxuICAgICAgICA3NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDMzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExLFxuICAgICAgICA1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjksXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkM5eUNUVHFnb21USzBXdnd2Y2xaYUdyc2tKclpiYnk0M2pIRDNqUDZtWlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJHVjJ0Q3pqUWktZTdxa2tjYmpkbkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2Q1YThkMjYtZTU1ZC00YmE1LWE4N2EtYzBjMjAwNjU3MmE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDIxOCxcbiAgICAgIDEyLFxuICAgICAgMTM3LFxuICAgICAgMTg5LFxuICAgICAgMTAxLFxuICAgICAgMTQyLFxuICAgICAgMjIxLFxuICAgICAgNjUsXG4gICAgICAyNDksXG4gICAgICAxNSxcbiAgICAgIDExNyxcbiAgICAgIDE4NSxcbiAgICAgIDczLFxuICAgICAgOTMsXG4gICAgICAyMzcsXG4gICAgICA0MCxcbiAgICAgIDE2NyxcbiAgICAgIDIxNyxcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDkxLFxuICAgICAgMTMyLFxuICAgICAgMTQ2LFxuICAgICAgODIsXG4gICAgICA0NixcbiAgICAgIDExNixcbiAgICAgIDMxLFxuICAgICAgMjAyLFxuICAgICAgMixcbiAgICAgIDIxMyxcbiAgICAgIDEwOCxcbiAgICAgIDMwLFxuICAgICAgMTQyLFxuICAgICAgNDEsXG4gICAgICAxNjUsXG4gICAgICAyNTMsXG4gICAgICA3MixcbiAgICAgIDQ4LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRSRDVIRkhTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM3MTYzODYwOjY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oC7fkhlbnp5IFRyYWRlJ3N+4oC7XCIsXG4gICAgXCJsaWRcIjogXCIxMTAyMDA3NDA2NzE1NjQ6NjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlRoczlBRUVJRDkzclFHR0VJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBb2ZqeVVuN0EwK09xYVo5Q1J4YU5PS1loZzhkc05mU1M1QUVxanZLWkdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFRWEdJQWZaSXIyWWdsNW5lRkh5N3Rtdk1oVTJHU3JXQUxJT0tXVVlOT3VGMkljNlAyVzh6WWU3S2svV0hGQVNHS1BBVkNvUFdodm81NTlzNWpMRUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRjNVgyVE9WdXlLdWpFS2tBQ2UwQk5ZMFlRWEdJeTZveWR0TnBmaEJ1L21wMHlrNGhTaVJSV3BwRVZjVXpzQUsxaGVtY0lzVUE2K01RU0NZdjhMekRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzcxNjM4NjA6NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjIwNzM5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "HENZY_VIBES",
  ownername:process.env.OWNER_NAME|| "Henzy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "HENRY"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
