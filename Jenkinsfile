pipeline {
     agent any
     tools {nodejs node}
     stages {
        stage("Build") {
            steps {
                echo "build done"
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                echo "deployed"
            }
        }
    }
}
