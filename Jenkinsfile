pipeline {
    agent any
    tools {
        nodejs 'yarn'
    }

    environment { TERM = 'xterm'; NO_COLOR = '1' }

    stages {
        stage('install') {
            steps {
                sh 'yarn'
            }
        }

        stage('build') {
            steps {
                sh 'yarn build'
            }
        }

        stage('unit-test') {
            steps {
                sh 'yarn test'
            }
        }

        stage('E2E Tests') {
            steps {
                sh 'yarn test:e2e'
            }
            post {
                always {
                    junit testResults: '**/reports/**/*.xml', allowEmptyResults: true
                }
            }
            
        }

        stage('deploy') {
            steps {
                s3Upload consoleLogLevel: 'INFO', 
                  dontSetBuildResultOnFailure: false, 
                  dontWaitForConcurrentBuildCompletion: false, 
                  entries: [[
                      bucket: "cicd-workshop-playground/${env.GIT_URL.split('/')[3]}", 
                      excludedFile: '', 
                      flatten: false, 
                      gzipFiles: false, 
                      keepForever: false, 
                      managedArtifacts: false, 
                      noUploadOnFailure: false, 
                      selectedRegion: 'eu-central-1', 
                      showDirectlyInBrowser: false, 
                      sourceFile: 'public/**/*.*', 
                      storageClass: 'STANDARD', 
                      uploadFromSlave: false, 
                      useServerSideEncryption: false
                    ]], 
                    pluginFailureResultConstraint: 'FAILURE', 
                    profileName: 'role-based-access', 
                    userMetadata: []
            }
        }
    }
}
