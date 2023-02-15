const git = require('git-clone');
const { exec } = require('child_process');

git('https://github.com/sherunoizu/armo-users', './path/to/clone', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Cloned successfully!');
    // continue with installing dependencies and starting the project
  }
});

// Перейти в директорию проекта
process.chdir('/path/to/project');

// Выполнить команду npm install
exec('npm install', (err, stdout, stderr) => {
  if (err) {
    console.error(`Ошибка выполнения команды: ${err}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

exec('npm start');
