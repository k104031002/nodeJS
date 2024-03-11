// 直接命名導出
// import { sayMyName, sayMyCountry } from "./boy.mjs";

// 聚合導出   ↑　import 寫法相同 ↓
// import { sayMyName, sayMyCountry } from "./boy2.mjs";

// 重新命名導出 
import { sayMyName, sayMyCountry } from "./boy3.mjs";

sayMyName();
sayMyCountry();