import lessonIcon from '@/assets/img/lessonIcon.png';
import logo from '@/assets/img/logo.png';
import closeIcon from '@/assets/img/closeIcon.png';
import { Carousel } from 'antd';
import data from './index.json';
import { Modal } from 'antd';
import styles from './index.less';
import React, { useState } from 'react';
import LessonResources from '@/components/lessonResources';
import TeacherTeam from '@/components/teacherTeam';
import ClassDetail from '@/components/classDetail';
import ProjectDetail from '@/components/projectDetail';

const Homepage = () => {
  const [lessonModalOpen, setLessonModalOpen] = useState(false);
  const [teacherTeamOpen, setTeacherTeamOpen] = useState(false);
  const [classDetailOpen, setClassDetailOpen] = useState(false);
  const [projectDetailOpen, setProjectDetailOpen] = useState(false);
  const [projectUrl, setProjectUrl] = useState("");
  const [isProjectDetailMarkdown, setIsProjectDetailMarkdown] = useState(true);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView();
  }

  const turnToRegistrationPage = () => {
    window.open("https://mp.weixin.qq.com/s/NWPxQwqgE0xBGBg7lr1yzQ");
  }

  const openProjectDetail = (url) => {
    setIsProjectDetailMarkdown(true);
    setProjectUrl(url);
    setProjectDetailOpen(true);
  }

  const openProjectLink = (url) => {
    setIsProjectDetailMarkdown(false);
    setProjectUrl(url);
    setProjectDetailOpen(true);
  }

  const openLessonLink = (url) => {
    if(url !== ""){
      window.open(url);
    }
  }

  const { lessons, projects, process, lastProcess, exams, schedule, teachers } = data;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.head}>
          <div className={styles.title}>
            <img src={logo} className={styles.logo} />
            <div className={styles.titleText}>复旦大学高中生人工智能先修课</div>
          </div>
          <div className={styles.guide}>
            <div
              className={styles.guideName}
              onClick={() => setClassDetailOpen(!classDetailOpen)}
            >课程详情</div>
            <div
              className={styles.guideName}
              onClick={() => scrollToProjects()}
            >实例项目</div>
            <div
              className={styles.guideName}
              onClick={() => setLessonModalOpen(!lessonModalOpen)}
            >课程资源
            </div>
            <div
              className={styles.guideName}
              onClick={() => setTeacherTeamOpen(!teacherTeamOpen)}
            >教师团队</div>
          </div>
        </div>
        <div className={styles.carousel}>
          <Carousel>
            {lessons.map((item, index) => {
              return (
                <>
                  <div className={styles.childrenCarsel} key={index}>
                    <div>
                      <div className={styles.carouselHeader}>{item.lessonName}</div>
                      <div className={styles.context}>
                        {item.lessonDetail}
                      </div>
                      <div className={styles.button} onClick={() => openLessonLink(item.link)}>{item.lessonButton}</div>
                      <div className={styles.lessonDetails}>
                        {item.lessonFeature.map((context) => {
                          return (
                            <>
                              <div className={styles.lessonDetail}>
                                <img src={lessonIcon} className={styles.icon} />
                                <p className={styles.lessonText}>{context}</p>
                              </div>
                            </>
                          )
                        })}
                      </div>
                    </div>
                    <img className={styles.quote} src={require(`@/assets/img/lesson/${item.lessonImg}`)} />
                  </div>
                </>
              )
            })}
          </Carousel>
        </div>
      </div>
      <div className={styles.bodyProject} id="projects">
        <div className={styles.projectHeader}>实例项目</div>
        <div className={styles.projects}>
          {projects.map((item) => {
            return (
              <>
                <div className={styles.project} style={{ background: `url(${require("@/assets/img/project/" + item.projectBackground)}) center no-repeat` }}>
                  <div className={styles.projectHeader}>
                    <img className={styles.projectImg} src={require(`@/assets/img/project/${item.projectIcon}`)} />
                    <div className={styles.name}>{item.projectName}</div>
                  </div>
                  <div className={styles.description}>{item.projectDescription}</div>
                  <div className={styles.projectFooter}>
                    <div className={styles.readMore} onClick={() => { item.markdown !== "" ? openProjectDetail(item.markdown) : openProjectLink(item.link) }}>{item.projectReadMore}</div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className={styles.bodyDetail}>
        <div className={styles.process}>
          <div className={styles.processTitle}>教学内容安排：</div>
          {process.map((item) => {
            return (
              <>
                <div className={styles.item}>
                  <div className={styles.number}>{item.number}</div>
                  <div className={styles.itemDetail}>
                    <p className={styles.itemName}>{item.itemName}</p>
                    <p className={styles.itemAuthor}>{item.itemAuthor}</p>
                  </div>
                </div>
                <div className={styles.line}></div>
              </>
            )
          })}
          <div className={styles.item}>
            <div className={styles.number}>{lastProcess.number}</div>
            <div className={styles.itemDetail}>
              <p className={styles.itemName}>{lastProcess.itemName}</p>
              <p className={styles.itemAuthor}>{lastProcess.itemAuthor}</p>
            </div>
          </div>
        </div>
        <div className={styles.exam}>
          <div className={styles.examTitle}>考核方式：</div>
          {exams.map((item) => {
            return (
              <>
                <div className={styles.report}>
                  <div>
                    <img className={styles.icon} src={`${require("@/assets/img/exam/" + item.icon)}`} />
                  </div>
                  <div>
                    <div className={styles.reportTitle}>{item.title}</div>
                    {item.details.map((detail) => {
                      return (
                        <div className={styles.reportDetail} dangerouslySetInnerHTML={{ __html: detail }} />
                      )
                    })}
                    <div></div>
                  </div>
                </div>
              </>
            )
          })}
          <div className={styles.schedule}>
            <div className={styles.title}>{schedule.title}</div>
            {schedule.date.map((item) => {
              return (
                <div className={styles.date}>{item}</div>
              )
            })}
            <div className={styles.line} />
            <div className={styles.title}>{schedule.locationTitle}</div>
            <div className={styles.date}>{schedule.duration}</div>
          </div>
        </div>
      </div>
      <div className={styles.team}>
        <div className={styles.teamTitle}>教师团队</div>
        <div className={styles.teachers}>
          {teachers.map((item) => {
            return (
              <>
                <div className={styles.teacher}>
                  <img className={styles.teamImage} src={`${require("@/assets/img/team/" + item.figure)}`} />
                  <div className={styles.teacherName}>{item.teacherName}</div>
                  <div className={styles.jobTitle}>{item.jobTitle}</div>
                  {/* <div className={styles.rewards} dangerouslySetInnerHTML={{ __html: item.rewards }} /> */}
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className={styles.regist}>
        <div className={styles.text}>复旦大学高中生人工智能先修课</div>
        <div className={styles.button} onClick={() => turnToRegistrationPage()}>马上报名</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.catalogs}>
          <div
            className={styles.catalog}
            onClick={() => setClassDetailOpen(!classDetailOpen)}
          >
            课程详情
          </div>
          <div
            className={styles.catalog}
            onClick={() => scrollToProjects()}
          >
            实例项目
          </div>
          <div
            className={styles.catalog}
            onClick={() => setLessonModalOpen(!lessonModalOpen)}
          >
            课程资源
          </div>
          <div
            className={styles.catalog}
            onClick={() => setTeacherTeamOpen(!teacherTeamOpen)}
          >
            教师介绍
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.copyrightAndPolicy}>
          <div className={styles.copyright}>© Copyright 2023, All Rights Reserved</div>
          <div className={styles.policy}>
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Modal
            open={classDetailOpen}
            onCancel={() => { setClassDetailOpen(false) }}
            closeIcon={<img src={closeIcon} className={styles.closeIcon} />}
            footer={null}
          >
            <ClassDetail />
          </Modal>
        </div>
        <div>
          <Modal
            open={lessonModalOpen}
            onCancel={() => { setLessonModalOpen(false) }}
            closeIcon={<img src={closeIcon} className={styles.closeIcon} />}
            footer={null}
          >
            <LessonResources />
          </Modal>
        </div>
        <div>
          <Modal
            open={teacherTeamOpen}
            onCancel={() => { setTeacherTeamOpen(false) }}
            closeIcon={<img src={closeIcon} className={styles.closeIcon} />}
            footer={null}
          >
            <TeacherTeam />
          </Modal>
        </div>
        <div>
          <Modal
            open={projectDetailOpen}
            onCancel={() => { setProjectDetailOpen(false) }}
            closeIcon={<img src={closeIcon} className={styles.closeIcon} />}
            footer={null}
            destroyOnClose={true}
          >
            <ProjectDetail url={projectUrl} isMarkdown={isProjectDetailMarkdown} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
