const SLIDE_FOLDER = '/images/slides'

/**
 * Event captions, indexed from 1 to match image-slide-1, image-slide-2, ...
 * Leave caption empty to hide the description under that photo.
 */
export const slideStories = [
  {
    title: 'Mối tình của tôi',
    caption:
      'Đây có lẽ là một trong những khoảnh khắc tuyệt vời nhất của một thằng simp lỏ như anh. Mặc dù chỉ là tính yêu bọ xít nhưng nó vẫn là một kỷ niệm đẹp và anh sẽ không bao giờ quên được.',
  },

  {
    title: 'Cuộc gặp đầy duyên nợ',
    caption:
      'Có lẽ ông trời cũng không nỡ để chúng mình lạc mất nhau. Chẳng biết vì một lý do nào đó, nhưng cuối cùng chúng mình lại có một cuộc gặp gỡ đầy bất ngờ như thế.',
  },

  {
    title: 'Tình yêu bắt đầu, một cuộc sống thật màu hồng',
    caption:
      'Một tình yêu mà tôi hàng mong đợi, tôi luỵ em trong suốt bao nhiêu lâu cuối cùng cũng được nắm lấy đôi bàn tay ấy. Mới yêu có quá nhiều câu chuyện mà muốn kể, chia sẻ với nhau lúc nào cũng dính lấy nhau như gì ấy, vui và hạnh phúc vl.',
  },

  {
    title: 'Cuộc sống thử của đôi bạn trẻ',
    caption:
      'Với anh, đây có lẽ là lúc chúng mình bắt đầu bước sang một cuộc sống mới. Có một người bạn cùng phòng, nhưng người đó lại chính là người mình yêu. Cảm giác lúc ấy lạ lắm, vừa vui, vừa hạnh phúc, mà cũng có chút gì đó khó tả.',
  },

  {
    title: 'Cùng nhau tâm sự, chia sẻ với nhau tất cả mọi thứ trên đời',
    caption:
      'Nếu để nói em là một người bạn thì cũng chẳng sai. Vì anh có thể chia sẻ với em tất cả mọi thứ, chẳng cần phải giấu giếm điều gì, từ những chuyện nhỏ nhặt nhất cho đến những ý tưởng và kế hoạch trong tương lai. Cảm ơn em vì đã luôn lắng nghe anh, kể cả những câu chuyện vu vơ và nhỏ bé nhất. Có những lúc chỉ cần có người nghe mình nói thôi cũng khiến anh cảm thấy rất vui và hạnh phúc rồi.',
  },

  {
    title: 'Cùng nhau vượt qua lời nguyền',
    caption:
      'Đây cũng không phải là một khoảng thời gian quá dài, nhưng đủ để chúng mình hiểu nhau hơn và có thêm rất nhiều khoảnh khắc tuyệt vời bên nhau.',
  },

  {
    title: 'Ở bên cạnh nhau trong mọi khoảnh khắc',
    caption:
      'Lúc này em tốt nghiệp. Anh vui vì được ở bên cạnh và chứng kiến thêm một cột mốc quan trọng trong cuộc sống của em.',
  },

  {
    title: 'Kỷ niệm các mốc thời gian đặc biệt',
    caption:
      'Cùng nhau đi qua những mốc thời gian đặc biệt, 1 năm, rồi 500 ngày, rồi 1000 ngày. Anh mong con số này sẽ còn nhiều hơn nữa. Anh nghĩ những kỷ niệm như thế này sẽ giúp chúng mình sau này có thể ngồi lại với nhau, cùng nhìn lại những gì đã xảy ra trong suốt thời gian qua, để thấy rằng chúng mình đã cùng nhau đi được một chặng đường cũng chẳng hề ngắn.',
  },

  {
    title: 'Cùng nhau đi đến những nơi rất xa',
    caption:
      'Thật may mắn khi chúng mình đã có cơ hội cùng nhau đi đến những nơi rất đẹp và lãng mạn. Tất nhiên trong mỗi chuyến đi cũng sẽ có những chuyện không như ý, nhưng thôi, những điều không vui thì mình cứ để lại phía sau. Hãy chỉ nhớ những kỷ niệm đẹp và những chuyến đi đầy ý nghĩa mà hai đứa đã có cùng nhau.',
  },

  {
    title: 'Công việc và cuộc sống',
    caption:
      'Ngoài những lúc chia sẻ về cuộc sống và gia đình, em cũng chính là người anh chia sẻ về công việc nhiều nhất. Anh luôn thích kể cho em nghe những chuyện đã xảy ra trong một ngày làm việc. Nghe thì có vẻ vớ vẩn và xàm xí thật, nhưng anh lại thích cảm giác đó cực kỳ. Anh cũng thích nghe em kể về một ngày của em. Sau này hãy cứ kể cho anh thật nhiều về những điều em đã trải qua trong một ngày làm việc nha.',
  },

  {
    title: 'Những thử thách và khó khăn trong tình yêu',
    caption:
      'Yêu nhau càng lâu, chúng mình càng hiểu và cũng càng dễ bộc lộ những cảm xúc cá nhân của mình hơn. Đôi khi vì những cảm xúc đó mà chúng mình vô tình không để ý đến đối phương. Anh nghĩ đó cũng không hẳn là một vấn đề quá lớn, miễn là sau mỗi lần như thế, chúng mình lại hiểu nhau hơn một chút và biết cách yêu nhau tốt hơn một chút.',
  },

  {
    title: 'Hai chúng mình đều là những kẻ nóng tính, hãy thừa nhận đi',
    caption:
      'Bọn mình có thể hợp nhau trong rất nhiều thứ, nhưng riêng chuyện này thì chắc phải thừa nhận là không. Anh thừa nhận anh là người nóng tính, đôi khi còn hơi hamlon một chút. Nhưng sau mỗi lần như thế, anh đều muốn chủ động làm lành và xoa dịu em. Có thể lúc đó em sẽ thấy thái độ của anh rất khó chịu, nhưng thật ra sau khi bình tĩnh lại, anh cũng chẳng muốn hai đứa phải giận nhau lâu đâu.',
  },

  {
    title: 'Chê bai nhiều rồi thì cũng phải khen 1 chút',
    caption:
      'Mặc dù có những lúc cãi vã, vì tức giận nên đôi khi anh đã nói những lời không hay. Nhưng thật sự em là một cô gái rất hiểu chuyện, luôn biết quan tâm và lo lắng cho anh mà chẳng toan tính điều gì cả. Những điều đó anh luôn nhìn thấy và trân trọng. Và thật lòng, anh cảm thấy rất hạnh phúc vì có một người như em bên cạnh.',
  },

  {
    title: 'Tương lai của chúng mình',
    caption:
      'Trong tương lai của anh thì lúc nào cũng có em. Nghe sến thật, nhưng có lẽ em đã trở thành một phần gắn bó với cuộc sống của anh rồi. Từ những cột mốc quan trọng cho đến những lúc khó khăn, anh đều có em ở bên cạnh. Không phải là sự giúp đỡ về vật chất, mà đơn giản là một chỗ dựa tinh thần và cũng là nguồn động lực để anh có thể cố gắng, nỗ lực nhiều hơn mỗi ngày.',
  },

  {
    title: 'Cải thiện mối quan hệ',
    caption:
      'Hôm nay là sinh nhật em mà anh lại nói đến nhiều chuyện khác quá. Nhưng anh muốn nhân cột mốc này, chúng mình có thể cùng nhau chia sẻ nhiều hơn để mối quan hệ của hai đứa ngày càng tốt đẹp hơn. Có những điều chưa tốt thì mình cùng nhau khắc phục, để sau này khi về chung một nhà, chúng mình có thể hòa hợp với nhau hơn. Chẳng có mối quan hệ nào là hoàn hảo cả, nhưng có những điều chỉ cần mỗi người thay đổi thêm một chút thôi thì mọi thứ cũng có thể trở nên tốt đẹp hơn rất nhiều.',
  },

  {
    title: 'Chúc mừng sinh nhật em bé iu.',
    caption:
      'Thêm một tuổi mới rồi. Anh chúc mọi điều tốt đẹp nhất sẽ đến với em, công việc sắp tới sẽ gặp thật nhiều may mắn và thuận lợi. Những mối quan hệ với bạn bè, đồng nghiệp sẽ luôn vui vẻ, đáng yêu và gắn kết. Dù có chuyện gì xảy ra thì cũng đừng quên thằng này vẫn luôn ở đây, vẫn luôn ở bên cạnh và sẵn sàng để em chia sẻ mọi điều nhé. Và tất nhiên, đừng quên là càng ngày sẽ càng phải yêu anh nhiều hơn nữa.',
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