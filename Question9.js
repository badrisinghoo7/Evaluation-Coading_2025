function file(arr){
    // console.log(arr)
    let obj = {}
    for(let i=0;i<arr.length;i++){
        let key = arr[i].split(".")[1];
        if(!obj[key]){
            obj[key]=[]
        }else{
            obj[key].push(arr[i])
        }
    }
    console.log(obj)
    
}

let files = [
  "document1.pdf",
  "document2.pdf",
  "image1.png",
  "image2.png",
  "text1.txt",
  "text2.txt",
  "photo1.jpg",
  "photo2.jpg",
  "program1.exe",
  "program2.exe",
  "data1.csv",
  "data2.csv",
  "report1.pdf",
  "report2.pdf",
  "image3.png",
  "text3.txt",
  "photo3.jpg",
  "document3.pdf"
];
file(files)
