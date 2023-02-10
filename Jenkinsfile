pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                echo "build done"
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                echo "deployed"
            }
        }
    }
}
