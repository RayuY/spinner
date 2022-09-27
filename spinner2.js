let animation = ['|', '/', '-', '\\' ,'|' , '/', '-', '\\', '|']

let t = 500;


  for (const ele of animation) {
    setTimeout(() => {
    process.stdout.write(`\r${ele}   `);
    }, t);
    t += 200;
  }
