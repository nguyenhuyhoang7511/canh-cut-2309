const SLIDE_FOLDER = '/images/slides'

/**
 * Event captions, indexed from 1 to match image-slide-1, image-slide-2, ...
 * Leave caption empty to hide the description under that photo.
 */
export const slideStories = [
  {
    title: 'Mối tình của tôi',
    caption:
      'Đây có lẽ là một trong những khoảnh khắc tuyệt vời nhất của một thằng simp lỏ như anh. Mặc dù chỉ là tính yêu bọ xít nhưng nó vẫn là một kỷ niệm đẹp và anh sẽ không bao giờ quên được, nó ngây thơ hồn nhiên mà trong sáng biết bao.',
  },

  {
    title: 'Cuộc gặp lại đầy bất ngờ',
    caption:
      'Có lẽ ông trời cũng không nỡ để chúng mình lạc mất nhau, nên vì nhiều lý do mà lại nảy sinh ra cuộc gặp này. Nhưng dù sao với anh đây chính là một món quà lớn nhất của năm 2022 dành cho anh.',
  },

  {
    title: 'Tình yêu bắt đầu, một cuộc sống thật màu hồng',
    caption:
      'Manifest, một tình yêu mà tôi từng mong đợi, tôi luỵ bạn trong suốt bao nhiêu lâu cuối cùng cũng được tay trong tay với ai đó. Người đã làm tôi sống dở chết dở trong một khoảng thời gian khá dài, nhưng cũng chính em là một nguồn động lực để anh cố gắng phấn đấu phát triển bản thân mình trở nên tốt hơn. Nếu không vì như thế có lẽ anh vẫn sẽ mãi là một đứa mải chơi, lười học, cả có mục tiêu gì để phát triển bản thân mình cả, nghĩ tích cực thì đây cũng là tốt cho anh ấy nhỉ =)))',
  },

  {
    title: 'Cuộc sống thử của đôi bạn trẻ',
    caption:
      'Với anh, đây có lẽ là lúc chúng mình bắt đầu bước sang một cuộc sống mới. Có một người bạn cùng phòng, nhưng người đó lại chính là người mình yêu. Cảm giác lúc ấy lạ lắm, vừa vui, vừa hạnh phúc, mà cũng có chút gì đó khó tả. Ngoài những lúc vui vẻ, hạnh phúc thì cũng không tránh khỏi những lúc bất đồng và giận dỗi tuy nhiên anh vẫn thích việc sống chung với em, ăn ngon tối có người ôm để ngủ còn gì tuyệt vời hơn nữa. Không biết em như nào nhưng với anh thì chưa bao giờ hối hận vì lựa chọn này cả.',
  },

  {
    title: 'Chia sẻ với nhau tất cả mọi thứ trên đời',
    caption:
      'Nếu để nói em là một người bạn thì cũng chẳng sai. Vì anh có thể chia sẻ với em tất cả mọi thứ, chẳng cần phải giấu bất kể điều gì, từ những chuyện nhỏ nhặt nhất cho đến những ý tưởng và kế hoạch trong tương lai. Cảm ơn em vì đã luôn lắng nghe anh, kể cả những câu chuyện vu vơ và nhỏ bé nhất. Có những lúc chỉ cần có người nghe mình nói thôi cũng khiến anh cảm thấy rất vui và hạnh phúc rồi.',
  },

  {
    title: 'Cùng nhau vượt qua lời nguyền',
    caption:
      'Đây cũng không phải là một khoảng thời gian quá dài, nhưng đủ để chứng minh rằng mối quan hệ của chúng mình là nghiêm túc và có thể tiến xa hơn nữa.',
  },

  {
    title: 'Ở bên cạnh nhau trong mọi khoảnh khắc',
    caption:
      'Anh luôn muốn bản thân mình được suốt hiện trong mọi khoảng khắc đặc biệt của em, mong là điều này cũng sẽ tiếp thêm thật nhiều sức mạnh để em có thể vượt qua mọi vấn đề khó khăn.',
  },

  {
    title: 'Kỷ niệm các mốc thời gian đặc biệt',
    caption:
      'Cùng nhau đi qua những mốc thời gian đặc biệt, 1 năm, 500 days, rồi 1000. Anh mong con số này sẽ còn nhiều hơn nữa. Anh nghĩ những kỷ niệm như thế này sẽ giúp chúng mình sau này có thể ngồi lại với nhau, cùng nhìn lại những gì đã xảy ra trong suốt thời gian qua, để có thể cùng nhau trở nên tốt hơn, trưởng thành hơn.',
  },
  {
    title: 'Cùng nhau đi đến những nơi rất xa',
    caption:
      'Thật may mắn khi chúng mình đã có cơ hội cùng nhau đi đến những nơi rất đẹp và lãng mạn. Tất nhiên trong mỗi chuyến đi cũng sẽ có những chuyện không như ý, nhưng thôi, những điều không vui thì mình cứ để lại ở đó đi và chỉ mang về những kỷ niệm đẹp và những điều ý nghĩa mà hai đứa đã cùng trải qua với nhau.',
  },

  {
    title: 'Công việc và cuộc sống',
    caption:
      'Ngoài những lúc chia sẻ về cuộc sống và gia đình, em cũng chính là người anh chia sẻ về công việc nhiều nhất. Anh luôn thích kể cho em nghe những chuyện đã xảy ra trong một ngày làm việc. Nghe thì có vẻ vớ vẩn và xàm xí thật, nhưng anh lại thích cảm giác đó cực kỳ, anh cũng thích nghe em kể về một ngày của em như nào. Sau này hãy cứ kể cho anh thật nhiều về những điều em đã trải qua trong một ngày làm việc nha.',
  },

  {
    title: 'Những thử thách và khó khăn trong tình yêu',
    caption:
      'Yêu nhau càng lâu, chúng mình càng hiểu và cũng càng dễ bộc lộ những cảm xúc cá nhân của mình hơn. Đôi khi vì những cảm xúc đó mà chúng mình vô tình không để ý đến đối phương. Anh nghĩ đó cũng không hẳn là một vấn đề quá lớn, miễn là sau mỗi lần như thế, chúng mình lại hiểu nhau hơn một chút và biết cách yêu nhau tốt hơn một chút. Anh biết là trong khoảng thời gian yêu nhau có những lúc anh đã rất tệ, khiến em phải suy nghĩ và buồn rất nhiều, có những lúc em chẳng muốn ở bên cạnh anh nữa. Để sau này nhìn nhận lại anh mới thấy, cảm ơn em vì đã không chọn cách rời bỏ anh.',
  },

  {
    title: 'Chúng mình là những ngọn lửa, hãy thừa nhận đi',
    caption:
      'Mặc dù có thể hợp nhau trong rất nhiều thứ, nhưng riêng chuyện này thì chắc phải thừa nhận rằng anh là người nóng tính, đôi khi còn hơi hamlon một chút. Nhưng sau mỗi lần như thế, anh đều muốn chủ động làm lành và xoa dịu em. Có thể em thấy anh biểu hiện giống như là không có chuyện gì xảy ra trước đó, nhưng thực sự với anh không phải như vậy, anh chỉ muốn làm trò con bò hoặc đơn giản là tìm cách để làm lành với em mà thôi, vì anh không muốn cả hai giận nhau lâu đâu nó sẽ nảy sinh nhiều suy nghĩ. Anh cũng mong là em hiểu được điều này và trong các lần cãi vã chúng mình đều nhường nhịn nhau một chút, cùng bình tĩnh ngồi lại với nhau để giải quyết. Chúng ta có thể dịu dàng với mọi người xung quanh tại sao lại phải đem những điều tiêu cực và bực tức dành cho đối phương. Điều này cũng không khiến tâm trạng của mình trở nên tốt hơn mà thậm chí còn khiến người kia cảm thấy buồn và tổn thương nữa.',
  },

  {
    title: 'Góc nhìn từ phía bản thân anh',
    caption:
      'Mặc dù có những lúc cãi vã, vì tức giận nên đôi khi anh đã nói những lời không hay. Nhưng anh luôn thấy em là một cô gái rất hiểu chuyện, luôn biết quan tâm và lo lắng cho anh mà chẳng toan tính điều gì cả. Những điều đó khiến anh càng thấy yêu và trân trọng em nhiều hơn. Hơn thế nữa em còn đối xử với anh như là bảo mẫu, chỉ cần anh đói là em có thể sẵn sàng vào bếp lúc 2h sáng để nấu cho anh ăn, dành cho anh những món quà bất ngờ, dù không nói ra nhưng những điều ấy khiến anh cảm thấy hạnh phúc lắm, cảm ơn em rất nhìuu.',
  },

  {
    title: 'Tương lai của chúng mình',
    caption:
      'Tương lại của em như nào? Trong tương lai của anh thì lúc nào cũng có em. Nghe sến thật, nhưng có lẽ em đã trở thành một phần không thể thiếu cuộc sống của anh rồi. Từ những cột mốc quan trọng cho đến những lúc khó khăn áp lực, nghỉ việc, chuyện gia đình anh đều có em ở bên cạnh để sẻ chia và giúp đỡ. Không phải là sự giúp đỡ về vật chất, mà đơn giản là một chỗ dựa tinh thần và cũng là nguồn động lực để anh có thể cố gắng, nỗ lực nhiều hơn mỗi ngày. Là đàn ông nên anh thấy mình sẽ cần phải cố gắng nhiều hơn phần của em, phải lo cơm áo gạo tiền rồi tương lai sau này nữa. Đôi khi việc bỏ tiền ra để đi xem concert với em không hẳn vì anh không thích, nhưng từ những cái nhỏ nhỏ như thế sẽ khiến tương lai chúng mình đỡ phải lo nghĩ nhiều hơn dù nó chẳng đáng là bao.',
  },

  {
    title: 'Điều anh muốn trong tình yêu của chúng mình',
    caption:
      'Hôm nay là sinh nhật em mà anh lại nói đến nhiều chuyện khác quá. Nhưng anh muốn nhân cột mốc này, chúng mình có thể cùng nhau chia sẻ nhiều hơn để mối quan hệ của hai đứa ngày càng tốt đẹp hơn. Có những điều chưa tốt thì mình cùng nhau khắc phục, để sau này khi về chung một nhà, chúng mình có thể hòa hợp với nhau hơn. Chẳng có mối quan hệ nào là hoàn hảo cả, nhưng có những điều chỉ cần mỗi người thay đổi thêm một chút thôi thì mọi thứ cũng có thể trở nên tốt đẹp hơn rất nhiều. ',
  },

  {
    title: 'Cuối cùng là chúc mừng sinh nhật bé iu.',
    caption:
      'Thêm một tuổi mới anh chúc mọi điều tốt đẹp nhất sẽ đến với em, công việc sắp tới sẽ gặp thật nhiều may mắn và thuận lợi. Những mối quan hệ với bạn bè, đồng nghiệp sẽ luôn vui vẻ, đáng yêu và gắn kết. Dù có chuyện gì xảy ra thì cũng đừng quên thằng này vẫn luôn ở bên cạnh và sẵn sàng để em chia sẻ mọi điều nhé. Đừng quên là càng ngày sẽ càng phải yêu anh nhiều hơn nữa.',
  },
]

export function buildSlides() {
  return slideStories.map((story, index) => {
    const order = index + 1

    return {
      order,
      file: `image-slide-${order}.jpeg`,
      src: `${SLIDE_FOLDER}/image-slide-${order}.jpeg`,
      title: story.title,
      caption: story.caption,
    }
  })
}