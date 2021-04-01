type Temperature = {
  date: string,
  id: number,
  temperature: number,
}

export type Temperatures = Temperature[]

const testData: Temperature[] = [{
  "date": "Mon, 29 Mar 2021 03:52:30 GMT",
  "id": 1,
  "temperature": 48.686
}, {"date": "Mon, 29 Mar 2021 03:52:34 GMT", "id": 2, "temperature": 50.634}, {
  "date": "Mon, 29 Mar 2021 03:52:35 GMT",
  "id": 3,
  "temperature": 48.686
}, {"date": "Mon, 29 Mar 2021 03:52:36 GMT", "id": 4, "temperature": 48.686}, {
  "date": "Mon, 29 Mar 2021 03:52:37 GMT",
  "id": 5,
  "temperature": 47.225
}, {"date": "Mon, 29 Mar 2021 03:52:38 GMT", "id": 6, "temperature": 48.199}, {
  "date": "Mon, 29 Mar 2021 03:52:39 GMT",
  "id": 7,
  "temperature": 47.225
}, {"date": "Mon, 29 Mar 2021 03:52:40 GMT", "id": 8, "temperature": 47.712}, {
  "date": "Mon, 29 Mar 2021 03:52:42 GMT",
  "id": 9,
  "temperature": 47.712
}, {"date": "Mon, 29 Mar 2021 03:52:43 GMT", "id": 10, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:52:44 GMT",
  "id": 11,
  "temperature": 48.199
}, {"date": "Mon, 29 Mar 2021 03:52:45 GMT", "id": 12, "temperature": 47.712}, {
  "date": "Mon, 29 Mar 2021 03:52:46 GMT",
  "id": 13,
  "temperature": 48.199
}, {"date": "Mon, 29 Mar 2021 03:52:47 GMT", "id": 14, "temperature": 47.712}, {
  "date": "Mon, 29 Mar 2021 03:52:48 GMT",
  "id": 15,
  "temperature": 47.225
}, {"date": "Mon, 29 Mar 2021 03:52:49 GMT", "id": 16, "temperature": 47.712}, {
  "date": "Mon, 29 Mar 2021 03:52:50 GMT",
  "id": 17,
  "temperature": 47.712
}, {"date": "Mon, 29 Mar 2021 03:52:51 GMT", "id": 18, "temperature": 47.712}, {
  "date": "Mon, 29 Mar 2021 03:52:52 GMT",
  "id": 19,
  "temperature": 47.225
}, {"date": "Mon, 29 Mar 2021 03:52:53 GMT", "id": 20, "temperature": 47.712}, {
  "date": "Mon, 29 Mar 2021 03:52:54 GMT",
  "id": 21,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:52:55 GMT", "id": 22, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:52:56 GMT",
  "id": 23,
  "temperature": 46.738
}, {"date": "Mon, 29 Mar 2021 03:52:58 GMT", "id": 24, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:52:59 GMT",
  "id": 25,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:53:00 GMT", "id": 26, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:53:01 GMT",
  "id": 27,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:53:02 GMT", "id": 28, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:53:03 GMT",
  "id": 29,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:53:04 GMT", "id": 30, "temperature": 47.225}, {
  "date": "Mon, 29 Mar 2021 03:53:05 GMT",
  "id": 31,
  "temperature": 47.225
}, {"date": "Mon, 29 Mar 2021 03:53:06 GMT", "id": 32, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:53:07 GMT",
  "id": 33,
  "temperature": 46.738
}, {"date": "Mon, 29 Mar 2021 03:53:08 GMT", "id": 34, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:53:09 GMT",
  "id": 35,
  "temperature": 47.225
}, {"date": "Mon, 29 Mar 2021 03:53:10 GMT", "id": 36, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:53:11 GMT",
  "id": 37,
  "temperature": 45.764
}, {"date": "Mon, 29 Mar 2021 03:53:12 GMT", "id": 38, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:53:13 GMT",
  "id": 39,
  "temperature": 46.738
}, {"date": "Mon, 29 Mar 2021 03:53:15 GMT", "id": 40, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:53:16 GMT",
  "id": 41,
  "temperature": 47.712
}, {"date": "Mon, 29 Mar 2021 03:53:17 GMT", "id": 42, "temperature": 47.225}, {
  "date": "Mon, 29 Mar 2021 03:53:18 GMT",
  "id": 43,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:53:19 GMT", "id": 44, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:53:20 GMT",
  "id": 45,
  "temperature": 46.738
}, {"date": "Mon, 29 Mar 2021 03:53:21 GMT", "id": 46, "temperature": 45.764}, {
  "date": "Mon, 29 Mar 2021 03:53:22 GMT",
  "id": 47,
  "temperature": 47.225
}, {"date": "Mon, 29 Mar 2021 03:53:23 GMT", "id": 48, "temperature": 45.764}, {
  "date": "Mon, 29 Mar 2021 03:53:24 GMT",
  "id": 49,
  "temperature": 46.738
}, {"date": "Mon, 29 Mar 2021 03:53:25 GMT", "id": 50, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:53:26 GMT",
  "id": 51,
  "temperature": 45.277
}, {"date": "Mon, 29 Mar 2021 03:53:27 GMT", "id": 52, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:53:28 GMT",
  "id": 53,
  "temperature": 47.225
}, {"date": "Mon, 29 Mar 2021 03:53:29 GMT", "id": 54, "temperature": 47.225}, {
  "date": "Mon, 29 Mar 2021 03:53:30 GMT",
  "id": 55,
  "temperature": 46.738
}, {"date": "Mon, 29 Mar 2021 03:53:32 GMT", "id": 56, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:53:33 GMT",
  "id": 57,
  "temperature": 46.738
}, {"date": "Mon, 29 Mar 2021 03:53:34 GMT", "id": 58, "temperature": 45.764}, {
  "date": "Mon, 29 Mar 2021 03:53:35 GMT",
  "id": 59,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:53:36 GMT", "id": 60, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:53:37 GMT",
  "id": 61,
  "temperature": 46.738
}, {"date": "Mon, 29 Mar 2021 03:53:38 GMT", "id": 62, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:53:39 GMT",
  "id": 63,
  "temperature": 47.225
}, {"date": "Mon, 29 Mar 2021 03:53:40 GMT", "id": 64, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:53:41 GMT",
  "id": 65,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:53:42 GMT", "id": 66, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:53:43 GMT",
  "id": 67,
  "temperature": 45.277
}, {"date": "Mon, 29 Mar 2021 03:53:44 GMT", "id": 68, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:53:45 GMT",
  "id": 69,
  "temperature": 45.764
}, {"date": "Mon, 29 Mar 2021 03:53:46 GMT", "id": 70, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:53:48 GMT",
  "id": 71,
  "temperature": 45.277
}, {"date": "Mon, 29 Mar 2021 03:53:49 GMT", "id": 72, "temperature": 45.277}, {
  "date": "Mon, 29 Mar 2021 03:53:50 GMT",
  "id": 73,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:53:51 GMT", "id": 74, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:53:52 GMT",
  "id": 75,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:53:53 GMT", "id": 76, "temperature": 45.277}, {
  "date": "Mon, 29 Mar 2021 03:53:54 GMT",
  "id": 77,
  "temperature": 45.764
}, {"date": "Mon, 29 Mar 2021 03:53:55 GMT", "id": 78, "temperature": 45.277}, {
  "date": "Mon, 29 Mar 2021 03:53:56 GMT",
  "id": 79,
  "temperature": 45.764
}, {"date": "Mon, 29 Mar 2021 03:53:57 GMT", "id": 80, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:53:58 GMT",
  "id": 81,
  "temperature": 45.277
}, {"date": "Mon, 29 Mar 2021 03:53:59 GMT", "id": 82, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:54:00 GMT",
  "id": 83,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:54:01 GMT", "id": 84, "temperature": 45.277}, {
  "date": "Mon, 29 Mar 2021 03:54:02 GMT",
  "id": 85,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:54:03 GMT", "id": 86, "temperature": 47.225}, {
  "date": "Mon, 29 Mar 2021 03:54:05 GMT",
  "id": 87,
  "temperature": 46.738
}, {"date": "Mon, 29 Mar 2021 03:54:06 GMT", "id": 88, "temperature": 45.277}, {
  "date": "Mon, 29 Mar 2021 03:54:07 GMT",
  "id": 89,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:54:08 GMT", "id": 90, "temperature": 45.277}, {
  "date": "Mon, 29 Mar 2021 03:54:09 GMT",
  "id": 91,
  "temperature": 45.277
}, {"date": "Mon, 29 Mar 2021 03:54:10 GMT", "id": 92, "temperature": 45.277}, {
  "date": "Mon, 29 Mar 2021 03:54:11 GMT",
  "id": 93,
  "temperature": 45.277
}, {"date": "Mon, 29 Mar 2021 03:54:12 GMT", "id": 94, "temperature": 46.738}, {
  "date": "Mon, 29 Mar 2021 03:54:13 GMT",
  "id": 95,
  "temperature": 45.764
}, {"date": "Mon, 29 Mar 2021 03:54:14 GMT", "id": 96, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:54:15 GMT",
  "id": 97,
  "temperature": 45.764
}, {"date": "Mon, 29 Mar 2021 03:54:16 GMT", "id": 98, "temperature": 46.251}, {
  "date": "Mon, 29 Mar 2021 03:54:17 GMT",
  "id": 99,
  "temperature": 46.251
}, {"date": "Mon, 29 Mar 2021 03:54:18 GMT", "id": 100, "temperature": 46.251}]

export default testData
